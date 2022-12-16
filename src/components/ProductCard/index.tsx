import Image from "next/image";
import { toast } from "react-toastify";

import { useCart } from "../../hooks/useCart";

import { formatValue } from "../../utils/formatValue";

import { CardContainer, ProductContainer, ProductInfo } from "./style";

interface Product{
    id: string,
    imageUrl: string,
    name: string
    price: {
        id: string,
        value: number
    }
}

interface ProductCardProps{
    product: Product
    onSelect?: (product: Product) => void
    className?: string
}

export default function ProductCard({ 
    product, 
    className, 
    onSelect 
}: ProductCardProps){

    const { addProduct } = useCart([
        "addProduct"
    ])

    const handleAddProductOnCart = () => {
        addProduct({
            id: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            quantity: 1,
            price: product.price
        })

        toast.success(`Produto ${ product.name } adicionado ao carrinho!`)
    }

    return(
        <CardContainer className={ className }>
            <ProductContainer  
                onClick={() => onSelect ? (
                    onSelect(product)
                ) : undefined}
            >
                <Image 
                    src={ product.imageUrl } 
                    width={520} 
                    height={480} 
                    alt="" 
                />
            </ProductContainer>
            <ProductInfo>
                <div>
                    <p>{ product.name }</p>
                    <span>{ formatValue(product.price.value) }</span>
                </div>
                <button onClick={ handleAddProductOnCart }>
                    <Image 
                        src="/assets/bag.svg" 
                        width={32} 
                        height={32} 
                        alt="" 
                    />
                </button>
            </ProductInfo>
        </CardContainer>
    )
}