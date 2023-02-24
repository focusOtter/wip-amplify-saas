import { withAuthenticator } from '@aws-amplify/ui-react'
import Script from 'next/script'
import React from 'react'

function PricingPage({ user }) {
	// Display a Stripe Pricing page
	// In dev, they see a confirmation screen.
	// In prod, they are routed to the app
	return (
		<div>
			<Script async src="https://js.stripe.com/v3/pricing-table.js"></Script>

			<stripe-pricing-table
				pricing-table-id="prctbl_1MZgYWFVOljUQinz3bG9dzfi"
				client-reference-id={`${user.attributes.sub}__${user.username}`}
				customer-email={user.attributes.email}
				publishable-key="pk_test_51JWuJCFVOljUQinzHw9HWShKlxDuF8UeYSPJbkDLrFSjdKg64xgQj47OM8HHIF9AaSul1VxPV6sn8QHYPbX43IME003yyFlTB8"
			></stripe-pricing-table>
		</div>
	)
}

export default withAuthenticator(PricingPage)
