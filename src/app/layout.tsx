import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export const metadata: Metadata = {
  title: 'ERP Client',
  description: 'Enterprise Resource Planning Client Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
