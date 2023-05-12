import ClientOnly from './components/CLientOnly'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './provider/ToasterProvider'

const font = Nunito({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
