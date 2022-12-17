import { GetServerSideProps } from "next";
import { useEffect, useMemo } from "react";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";

import { useCart } from "../hooks/useCart";

import { ProductList, SuccessContainer, ProductItem, CheckoutInfo, BackHomeLink } from "../styles/pages/success";
import Image from "next/image";

interface SuccessProps{
    customer: string
    productsList: {
        id: string
        imageUrl: string
        name: string
        quantity: number
    }[]
}

export default function Success({ customer, productsList }: SuccessProps) {
    const { clearCart } = useCart(["clearCart"])

    useEffect(() => {
        clearCart()
    },[clearCart])

    const totalProducts = useMemo(() => {
        return productsList.reduce((acc, currentProduct) => acc + currentProduct.quantity ,0)
    },[productsList])

    return (
        <SuccessContainer>
            <ProductList>
                { productsList.map(product => (
                    <ProductItem>
                        <Image src={product.imageUrl} width={130} height={ 130 } alt=""/>
                    </ProductItem>
                )) }
            </ProductList>
            <CheckoutInfo>
                <h1>Compra efetuada!</h1>
                <p>Uhuul <strong>{ customer }</strong>, sua compra de 
                { totalProducts > 1 ? ` ${totalProducts} camisetas ` : ` ${totalProducts} camiseta ` }
                já está a caminho da sua casa.
                </p>

                <BackHomeLink href="/">
                    Voltar ao catálogo
                </BackHomeLink>
            </CheckoutInfo>
        </SuccessContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async({ query }) => {
    const sessionId = query.session_id as string

    if(!sessionId){
        return{
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    const sessionInfo = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items", "line_items.data.price.product"]
    })

    const checkoutInfo = {
        customer: sessionInfo.customer_details?.name,
        productsList: sessionInfo.line_items?.data.map(item => {
            const product = item.price?.product as Stripe.Product | undefined
            return {
                id: item.id,
                imageUrl: product?.images[0],
                name: product?.name,
                quantity: item.quantity
            }
        })
    }

    return {
        props: {
            customer: checkoutInfo.customer,
            productsList: checkoutInfo.productsList
        }
    }
}