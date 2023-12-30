import "./globals.css"

export const metadata = {
  title: "Ladedata",
  description: "Gem dine ladedata online og tilgå dem hvorsomhelst",
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="h-[100vh] overflow-y-hidden">{children}</body>
    </html>
  )
}
