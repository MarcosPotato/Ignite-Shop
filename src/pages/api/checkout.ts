import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

interface Product{
    priceId: string
    quantity: number
}

export default async function handler(request: NextApiRequest, response: NextApiResponse){
    if(request.method !== "POST"){
        return response.status(405).json({ message: "Not Allowed" })
    }

    const productsList = request.body?.productsList as Product[]

    if(!productsList){
        return response.status(404).json({ message: "'productsList' is missing" })
    }

    const successUrl = `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.APP_URL}`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: "payment",
        line_items: productsList.map(product => ({
            price: product.priceId,
            quantity: product.quantity
        }))
    })

    return response.status(201).json({
        message: "Checkout session created",
        checkoutSessionUrl: checkoutSession.url
    })
}