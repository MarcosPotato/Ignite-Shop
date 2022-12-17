import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

import { setCookie, parseCookies, destroyCookie } from "nookies"
import axios from "axios";

export interface CartProduct{
    id: string
    name: string
    quantity: number
    imageUrl: string
    price: {
        id: string,
        value: number
    }
}

export interface CartContextProps{
    cart: CartProduct[]
    addProduct: (product: CartProduct) => void
    removeProduct: (productId: string) => void
    increaseQuantity: (productId: string) => void
    decreaseQuantity: (productId: string) => void
    makeCheckout: () => Promise<string>
    clearCart: () => void
}

interface CartProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

    const [cart, setCart] = useState<CartProduct[]>(() => {
        const { "@igniteshop:cart": cart } = parseCookies(null, "@igniteshop:cart")

        if(!cart){
            return []
        }

        return JSON.parse(cart)
    })

    const addProduct = useCallback((product: CartProduct) => {
        setCart(prev => {
            let updatedCart: CartProduct[] = []

            const existProduct = prev.find(item => item.id === product.id)

            if(existProduct){
                updatedCart = prev.map(item => item.id === product.id ? ({
                    ...item,
                    quantity: item.quantity + 1
                }) :( item ))
            } else{
                updatedCart = [...prev, product]
            }
            return updatedCart
        })
    },[])

    const removeProduct = useCallback((productId: string) => {
        setCart(prev => prev.filter(item => item.id !== productId))
    },[])

    const increaseQuantity = useCallback((productId: string) => {
        setCart(prev => prev.map(item => item.id === productId ? ({
            ...item,
            quantity: item.quantity + 1
        }) :( item )))
    },[])

    const decreaseQuantity = useCallback((productId: string) => {
        setCart(prev => prev.map(item => item.id === productId ? ({
            ...item,
            quantity: item.quantity <= 1 ? 1 : item.quantity - 1
        }) :( item )))
    },[])

    const makeCheckout = useCallback(async(): Promise<string> => {
        const productsList = cart.map(item => ({
            priceId: item.price.id,
            quantity: item.quantity
        }))

        try {
            const response = await axios.post("/api/checkout", { productsList })
            return response.data.checkoutSessionUrl
            
        } catch (error: any) {
            console.log(error)
            throw error
        }
    },[cart])

    const clearCart = useCallback(() => {
        setCart([])
    },[])

    useEffect(() => {
        if(cart.length > 0){
            setCookie(null, "@igniteshop:cart", JSON.stringify(cart))
        } else{
            destroyCookie(null, "@igniteshop:cart") 
        }
    },[cart])

    return(
        <CartContext.Provider 
            value={{
                cart,
                addProduct,
                decreaseQuantity,
                increaseQuantity,
                removeProduct,
                makeCheckout,
                clearCart
            }}
        >
            { children }
        </CartContext.Provider>
    )
}