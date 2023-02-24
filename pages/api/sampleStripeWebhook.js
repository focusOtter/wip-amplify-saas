const Stripe = require('stripe')

let STRIPE_SECRET =
	'sk_test_51JWuJCFVOljUQinzOPb8qoO8qUyZNXIFv9ZPgSL1BKsZ5uvUbp8O96gcChQFV7GmDRhrq9fVWx3JlyS8yo68OzdM00jmehyJbr'
let STRIPE_WEBHOOK_SECRET = 'whsec_ui7z2XV7kbwevFhEMifqzZipMIy8htip'

exports.handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`)
	let stripeEvent

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
	console.log('the event type', stripeEvent.type)
	console.log('the stripe event', JSON.stringify(stripeEvent, null, 2))
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
