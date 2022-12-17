import { useEffect, useMemo, useState } from "react"

import { useCart } from "../../hooks/useCart"
import { CartProduct } from "../../contexts/cart"

import { CartItem } from "../CartItem"

import { CartContainer, CartItens, CartPayment, PaymentDetails } from "./style"
import { formatValue } from "../../utils/formatValue"
import { toast } from "react-toastify"

export const Cart: React.FC = () => {
    const { cart, makeCheckout } = useCart([
        "cart",
        "makeCheckout"
    ])

    const [productList, setProductList] = useState<CartProduct[]>([])
    const [isCheckouting, setIsCheckouting] = useState(false)

    useEffect(() => {
        setProductList(cart)
    },[cart])

    const totalValue = useMemo(() => (
        productList.reduce((acc, currentProduct) => acc + (currentProduct.quantity * currentProduct.price.value), 0)
    ),[productList])

    const totalItens = useMemo(() => (
        productList.reduce((acc, currentProduct) => acc + currentProduct.quantity, 0)
    ),[productList])

    const handleCheckout = async() => {
        setIsCheckouting(true)
        try {
            const sessionUrl = await makeCheckout()
            window.location.href = sessionUrl

        } catch (error: any) {
            console.log(error)
            toast.error(error.response?.data.message || "Falha ao realizar checkout")
            setIsCheckouting(false)
        }
    }

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
                <button onClick={ handleCheckout } disabled={ isCheckouting }>
                    { isCheckouting ? "Carregando..." : "Finalizar compra"}
                </button>
            </CartPayment>
        </CartContainer>
    )
}