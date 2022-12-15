import type { AppProps } from 'next/app'

import Header from '../components/Header'

import { AppContainer, globalStyles } from '../styles/global'

import 'keen-slider/keen-slider.min.css'
import { CartProvider } from '../contexts/cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <AppContainer>
        <Header/>
        <Component {...pageProps} />
      </AppContainer>
    </CartProvider>
  )
}
