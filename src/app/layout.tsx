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
        <div className="main-container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
