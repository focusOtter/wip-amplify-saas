const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
	const date = new Date()
	const isoDate = date.toISOString()

	//construct the param
	const params = {
		TableName: process.env.API_HELLO_USERTABLE_NAME,
		Item: {
			__typename: 'User',
			id: event.request.userAttributes.sub, // the cognito sub + username
			createdAt: isoDate, // ex) 2023-02-16T16:07:14.189Z
			updatedAt: isoDate,
			owner: `${event.request.userAttributes.sub}::${event.userName}`,
			username: event.userName,
			email: event.request.userAttributes.email,
			subscriptionStatus: 'prospective',
		},
	}

	//try to add to the DB, otherwise throw an error
	try {
		await docClient.put(params).promise()
		return event
	} catch (err) {
		console.log(err)
		return event
	}
}
