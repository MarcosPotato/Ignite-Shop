import { useContextSelector } from 'use-context-selector'
import { CartContext, CartContextProps } from "../contexts/cart"

export const useCart = (observersContext: Array<keyof CartContextProps>) => {
    const context = useContextSelector(CartContext, (context) => {
        let observables: any = {}

        observersContext.forEach(observer => {
            observables[observer] = context[observer]
        })

        return observables as CartContextProps 
    })

    if(!context){
        throw new Error("Hook 'useCart' must be used inside a 'CartProvider'")
    }

    return context
}