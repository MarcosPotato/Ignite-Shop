import { createContext, ReactNode, useCallback, useState } from "react";

import { setCookie, parseCookies } from "nookies"

interface CartProduct{
    id: string
    name: string
    quantity: number
    price: {
        id: string,
        value: number
    }
}

interface CartContextProps{
    cart: CartProduct[]
    addProduct: (product: CartProduct) => void
    removeProduct: (productId: string) => void
    increaseQuantity: (productId: string) => void
    decreaseQuantity: (productId: string) => void
}

interface CartProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

    const [cart, setCart] = useState<CartProduct[]>(() => {
        const cart = parseCookies(null, "@igniteshop:cart")
    
        console.log(cart)

        if(!cart){
            return []
        }

        return []
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

            setCookie(null, "@igniteshop:cart", JSON.stringify(updatedCart))
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
            quantity: item.quantity <= 1 ? 1 : item.quantity + 1
        }) :( item )))
    },[])

    return(
        <CartContext.Provider 
            value={{
                cart,
                addProduct,
                decreaseQuantity,
                increaseQuantity,
                removeProduct 
            }}
        >
            { children }
        </CartContext.Provider>
    )
}