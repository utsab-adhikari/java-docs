import './globals.css'
import "@/styles/textbook.css";

export const metadata = {
  title: 'Advanced Programming with Java - Course Notes',
  description: 'Comprehensive course notes for Advanced Java Programming (PU)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="global-body">{children}</body>
    </html>
  )
}