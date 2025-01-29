import "../styles/globals.css"
import { Familjen_Grotesk } from "next/font/google"

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "BOTOL - Premium Water Bottles",
  description: "Discover our range of premium water bottles and hydration essentials",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={familjenGrotesk.className}>
      <body>{children}</body>
    </html>
  )
}

