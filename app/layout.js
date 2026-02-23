import './globals.css'

export const metadata = {
  title: 'UNEX IT | Premium IT Solutions',
  description: 'Mobile App, CRM, AI and Website Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  )
}