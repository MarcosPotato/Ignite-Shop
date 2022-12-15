import { useContext } from "react"
import { CartContext } from "../contexts/cart"

export const useCart = () => {
    const context = useContext(CartContext)

    if(!context){
        throw new Error("Hook 'useCart' must be used inside a 'CartProvider'")
    }

    return context
}