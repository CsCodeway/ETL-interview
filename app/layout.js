import './globals.css'

export const metadata = {
  title: 'ETL - Form',
  description: 'ETL - Front End Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
