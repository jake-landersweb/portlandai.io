import './globals.css'

export const metadata = {
  title: 'Portland AI',
  description: 'The premier consulting agency for artificial intelligence and ai related tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <header>

        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
