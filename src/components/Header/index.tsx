import Image from 'next/image'
import { useEffect, useState } from 'react';

import Drawer from 'react-modern-drawer'
import { useCart } from '../../hooks/useCart';
import { Cart } from '../Cart';
import { CartButton, CartButtonContainer, CartHeader, CartItensInfo, EmptyCart, HeaderContainer } from "./style";

import BagIcon from '../../assets/icons/bag.svg'
import CloseIcon from '../../assets/icons/close.svg'

export default function Header (){
    const { cart } = useCart([
        "cart"
    ])

    const [open, setOpen] = useState<boolean>(false)
    const [cartItens, setCartItens] = useState<number>(0)

    useEffect(() => {
        setCartItens(cart.length)
    },[cart])

    return(
        <>
        <HeaderContainer>
            <Image src="/assets/Logo.svg" width={129} height={52} alt=""/>
            <CartButtonContainer>
                { cartItens > 0 && (
                    <CartItensInfo>{ cartItens }</CartItensInfo>
                )}
                <CartButton onClick={() => setOpen(true)}>
                    <Image src={BagIcon} width={22} height={22} alt='' />
                </CartButton>
            </CartButtonContainer>
        </HeaderContainer>
        <Drawer
            open={open}
            onClose={() => setOpen(false)}
            direction='right'
            duration={200}
            style={{ 
                width: "600px", 
                backgroundColor: "#202024" 
            }}
        >
            <CartHeader>
                <button onClick={() => setOpen(false)}>
                    <Image src={CloseIcon} width={24} height={ 24 } alt="" />
                </button>
            </CartHeader>
            { cartItens <= 0 ? (
                <EmptyCart>
                    <h1>Nenhum item adicionado no carrinho</h1>
                </EmptyCart>
            ): (
                <Cart onCloseCart={ () => setOpen(false) } />
            ) }
        </Drawer>
        </>
    )
}