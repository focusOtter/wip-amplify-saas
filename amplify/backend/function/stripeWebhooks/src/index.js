/* Amplify Params - DO NOT EDIT
	API_HELLO_GRAPHQLAPIIDOUTPUT
	API_HELLO_USERTABLE_ARN
	API_HELLO_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const aws = require('aws-sdk')
const Stripe = require('stripe')

const fetchSecret = async (key) => {
	const { Parameters } = await new aws.SSM()
		.getParameters({
			Names: [key].map((secretName) => process.env[secretName]),
			WithDecryption: true,
		})
		.promise()

	return Parameters[0].Value
}

let STRIPE_SECRET
let STRIPE_WEBHOOK_SECRET

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`)
	let stripeEvent
	if (!STRIPE_SECRET && !STRIPE_WEBHOOK_SECRET) {
		STRIPE_SECRET = await fetchSecret('STRIPE_SECRET_KEY')
		STRIPE_WEBHOOK_SECRET = await fetchSecret('STRIPE_WEBHOOK_SECRET')
	}

	const stripe = Stripe(STRIPE_SECRET)
	const sig = event.headers['stripe-signature']

	try {
		stripeEvent = stripe.webhooks.constructEvent(
			event.body,
			sig,
			STRIPE_WEBHOOK_SECRET
		)
	} catch (err) {
		console.log('uh oh', err)
		return { 'problem occurred': err }
	}

	switch (stripeEvent.type) {
		case 'checkout.session.completed':
		//update subscription status in user table to 'PAID'
		case 'customer.subscription.updated':
		//update subscription status in user table to reflect
		case 'customer.subscription.deleted':
		default:
			console.log(`Unhandled event type ${stripeEvent.type}`)
	}

	return 'webhook finished'
}
