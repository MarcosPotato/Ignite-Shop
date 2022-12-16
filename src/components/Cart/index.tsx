import { useEffect, useMemo, useState } from "react"

import { useCart } from "../../hooks/useCart"
import { CartProduct } from "../../contexts/cart"

import { CartItem } from "../CartItem"

import { CartContainer, CartItens, CartPayment, PaymentDetails } from "./style"
import { formatValue } from "../../utils/formatValue"

interface CartProps{
    onCloseCart: () => void
}

export const Cart: React.FC<CartProps> = ({ onCloseCart }) => {
    const { cart } = useCart(["cart"])

    const [productList, setProductList] = useState<CartProduct[]>([])

    useEffect(() => {
        setProductList(cart)
    },[cart])

    const totalValue = useMemo(() => (
        productList.reduce((acc, currentProduct) => acc + (currentProduct.quantity * currentProduct.price.value), 0)
    ),[productList])

    const totalItens = useMemo(() => (
        productList.reduce((acc, currentProduct) => acc + currentProduct.quantity, 0)
    ),[productList])

    return (
        <CartContainer>
            <CartItens>
                <h1>Sacola de compras</h1>
                <div suppressHydrationWarning={true}>
                    { productList.map(product => (
                        <CartItem key={ product.id } product={product}/>
                    )) }
                </div>
            </CartItens>
            <CartPayment>
                <PaymentDetails>
                    <label>
                        Quantidade
                        <span>{ totalItens > 1 ? `${ totalItens } itens` : `${ totalItens } item`}</span>
                    </label>
                    <label>
                        Valor Total
                        <span>{ formatValue(totalValue) }</span>
                    </label>
                </PaymentDetails>
                <button>
                    Finalizar compra
                </button>
            </CartPayment>
        </CartContainer>
    )
}