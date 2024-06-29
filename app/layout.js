import './base.css'
import Footer from './partials/Footer'
import Header from './partials/Header'

import { Open_Sans } from 'next/font/google'

const roboto = Open_Sans({
  weight: '500',
  subsets: ['latin']
})

export const metadata = {
  title: 'Anasayfa',
  description: 'Next Js Öğrenme Merkezi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header></Header>
        <main className={"md:w-full lg:w-layout mx-auto"}>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
