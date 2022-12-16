import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { toast } from "react-toastify";
import Stripe from "stripe";
import { useCart } from "../../hooks/useCart";

import { stripe } from "../../lib/stripe";

import { ProductContainer, ImageContainer, ProductInfo } from "../../styles/pages/product";
import { formatValue } from "../../utils/formatValue";

interface Product{
  id: string,
  imageUrl: string,
  name: string
  description: string
  price: {
    id: string,
    value: number
  }
}

interface ProductProps{
  product: Product
}

export default function Product({ product }: ProductProps) {

  const { addProduct } = useCart([
    "addProduct"
  ])

  const hanleAddCart = async() => {
    addProduct({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      quantity: 1,
      price: product.price
    })

    toast.success(`Produto ${ product.name } adicionado ao carrinho!`)
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
        <span>{ formatValue(product.price.value) }</span>
        <p>{ product.description }</p>
        <button onClick={ hanleAddCart }>
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
      value: !!price.unit_amount ? price.unit_amount / 100 : 0
    }
  }

  return{
    props: {
      product: currentProduct
    },
    revalidate: 60 * 60 * 1 //1h
  }
}  