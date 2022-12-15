import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe";

import ProductCard from "../components/ProductCard";

import { HomeContainer } from "../styles/pages/home";

interface Product{
  id: string,
  imageUrl: string,
  name: string
  price: {
    id: string,
    value: string
  }
}

interface HomeProps{
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [silderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
      origin: "center",
    }
  })

  return (
    <HomeContainer ref={ silderRef } className="keen-slider">
      { products.map(product => (
        <Link 
          key={ product.id }
          className="keen-slider__slide"
          href={`/product/${ product.id }`}
        >
          <ProductCard product={ product } />
        </Link>
      )) }
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      imageUrl: product.images[0],
      name: product.name,
      price: {
        id: price.id,
        value: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        }).format(!!price.unit_amount ? price.unit_amount / 100 : 0)
      }
    }
  })

  return{
    props: {
      products: products
    },
    revalidate: 60 * 60 * 1 //1h
  }
}
