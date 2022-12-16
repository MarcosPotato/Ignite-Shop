import Image from "next/image"
import { CartProduct } from "../../contexts/cart"
import { useCart } from "../../hooks/useCart"
import { formatValue } from "../../utils/formatValue"
import { CartItemContainer, CartItemDetails, CartItemImageContainer, ChangeQuantityItem, RemoveButton } from "./style"

interface CartItemProps{
    product: CartProduct
}

export const CartItem: React.FC<CartItemProps> = ({
    product
}) => {

    const { decreaseQuantity, increaseQuantity, removeProduct } = useCart([
        "decreaseQuantity",
        "increaseQuantity",
        "removeProduct"
    ])

    return (
        <CartItemContainer>
            <CartItemImageContainer>
                <Image src={product.imageUrl} width={94} height={94} alt="" />
            </CartItemImageContainer>
            <CartItemDetails>
                <h1>{ product.name }</h1>
                <span>{ formatValue(product.quantity * product.price.value) }</span>
                <div>
                    <ChangeQuantityItem>
                        <button onClick={() => decreaseQuantity(product.id)}>
                            -
                        </button>
                        <span>{ product.quantity }</span>
                        <button onClick={() => increaseQuantity(product.id)}>
                            +
                        </button>
                    </ChangeQuantityItem>
                    <RemoveButton onClick={() => removeProduct(product.id)}>
                        Remover
                    </RemoveButton>
                </div>
            </CartItemDetails>
        </CartItemContainer>
    )
}