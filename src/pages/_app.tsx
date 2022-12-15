import type { AppProps } from 'next/app'

import Header from '../components/Header'

import { AppContainer, globalStyles } from '../styles/global'

import 'keen-slider/keen-slider.min.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Header/>
      <Component {...pageProps} />
    </AppContainer>
  )
}
