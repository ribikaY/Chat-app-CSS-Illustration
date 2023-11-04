import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'], weight:['400', '500', '600', '700'] })

export const metadata = {
  title: 'Chat app CSS Illustration',
  description: 'This is a solution to the Chat app CSS illustration challenge on Frontend Mentor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
