import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(request: NextApiRequest, response: NextApiResponse){
    /* if(request.method !== "POST"){
        return response.status(405).json({ message: "Not Allowed" })
    } */

    const { priceId } = request.body

    if(!priceId){
        return response.status(404).json({ message: "'priceId' is missing" })
    }

    const successUrl = `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.APP_URL}`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: "payment",
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ]
    })

    return response.status(201).json({
        message: "Checkout session created",
        checkoutSessionUrl: checkoutSession.url
    })
}