import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import { CartProvider } from '../contexts/cart'

import Header from '../components/Header'

import { AppContainer, globalStyles } from '../styles/global'

import 'keen-slider/keen-slider.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-modern-drawer/dist/index.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <AppContainer>
        <Header/>
        <Component {...pageProps} />
        <ToastContainer position="top-right" autoClose={5000} closeOnClick theme="colored"/>
      </AppContainer>
    </CartProvider>
  )
}
