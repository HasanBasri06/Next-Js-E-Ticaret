import { ToastContainer } from 'react-toastify'
import './base.css'
import Footer from './partials/Footer'
import Header from './partials/Header'

import { Open_Sans } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'
import Providers from './contexts/Providers'

const roboto = Open_Sans({
  weight: '500',
  subsets: ['latin']
})

export const metadata = {
  title: 'Anasayfa',
  description: 'Next Js ile e ticaret sitesi yaparak, next js öğreniyorum',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ToastContainer  pauseOnFocusLoss={false} />
          <Providers>
            <Header></Header>
            <main className={"md:w-full lg:w-layout mx-auto"}>
              {children}
            </main>
            <Footer></Footer>
          </Providers>
      </body>
    </html>
  )
}
