import './globals.css'

export const metadata = {
  title: 'Kevin Grafstrom | Software Developer',
  description: 'An artistic approach to software development'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
