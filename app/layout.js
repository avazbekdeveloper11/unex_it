import "./globals.css";

export const metadata = {
  title: 'UNEX IT | Premium IT Solutions',
  description: 'Mobile App, CRM, AI and Website Development',
}
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  )
}