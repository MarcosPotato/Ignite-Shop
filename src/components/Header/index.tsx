import Image from 'next/image'
import { useState } from 'react';
import Drawer from 'react-modern-drawer'
import { useCart } from '../../hooks/useCart';

import { CartButton, CartItensInfo, HeaderContainer } from "./style";

export default function Header (){

    const { cart } = useCart([
        "cart"
    ])

    console.log(cart)

    const [open, setOpen] = useState<boolean>(false)

    return(
        <>
        <HeaderContainer>
            <Image src="/assets/Logo.svg" width={129} height={52} alt=""/>
            <CartButton onClick={() => setOpen(true)}>
                { cart.length > 0 && (
                    <CartItensInfo>
                        { cart.length }
                    </CartItensInfo>
                )}
                <Image src="/assets/bag.svg" width={22} height={22} alt='' />
            </CartButton>
        </HeaderContainer>
        <Drawer
            open={open}
            onClose={() => setOpen(false)}
            direction='right'
            duration={200}
            style={{ width: "600px" }}
        >
            <div>Hello World</div>
        </Drawer>
        </>
    )
}