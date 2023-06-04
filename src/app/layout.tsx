import './globals.css';

import { Navbar, Footer } from './components';

export const metadata = {
  title: `CNCI Church | United States`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0">
          <Navbar />
        </header>
        <div className="bg-[#eceadc]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
