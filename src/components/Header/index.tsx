import Image from 'next/image'
import { HeaderContainer } from "./style";

export default function Header (){
    return(
        <HeaderContainer>
            <Image src="/assets/Logo.svg" width={129} height={52} alt=""/>
        </HeaderContainer>
    )
}