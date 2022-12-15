import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Stripe from "stripe";

import { stripe } from "../../lib/stripe";

import { ProductContainer, ImageContainer, ProductInfo } from "../../styles/pages/product";

interface Product{
  id: string,
  imageUrl: string,
  name: string
  description: string
  price: {
    id: string,
    value: string
  }
}

interface ProductProps{
  product: Product
}

export default function Product({ product }: ProductProps) {

  const hanleCheckout = async() => {
    try {
      const response = await axios.post("/api/checkout", {
        priceId: product.price.id
      })

      window.location.href = response.data.checkoutSessionUrl

    } catch (error: any) {
      alert("Erro ao cirar pagamento")
    }
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image 
          src={ product.imageUrl }
          width={ 520 } 
          height={ 480 } 
          alt=""
        />
      </ImageContainer>
      <ProductInfo>
        <h1>{ product.name }</h1>
        <span>{ product.price.value }</span>
        <p>{ product.description }</p>
        <button onClick={ hanleCheckout }>
          Colocar na Sacola
        </button>
      </ProductInfo>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return{
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async({ params }) => {
  if(!params?.id){
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  const productId = params.id as string

  const response = await stripe.products.retrieve(productId,{
    expand: ["default_price"]
  })

  const price = response.default_price as Stripe.Price

  const currentProduct: Product = {
    id: response.id,
    imageUrl: response.images[0],
    name: response.name,
    description: response.description as string,
    price: {
      id: price.id,
      value: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(!!price.unit_amount ? price.unit_amount / 100 : 0)
    }
  }

  return{
    props: {
      product: currentProduct
    },
    revalidate: 60 * 60 * 1 //1h
  }
}  