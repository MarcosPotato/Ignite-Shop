import Image from "next/image";

import { ProductContainer, ProductInfo } from "./style";

interface Product{
    id: string,
    imageUrl: string,
    name: string
    price: {
        id: string,
        value: string
    }
}

interface ProductCardProps{
    product: Product
}

export default function ProductCard({ product }: ProductCardProps){
    return(
        <ProductContainer>
            <Image src={ product.imageUrl } width={520} height={480} alt="" />
            <ProductInfo>
                <p>{ product.name }</p>
                <span>{ product.price.value }</span>
            </ProductInfo>
        </ProductContainer>
    )
}