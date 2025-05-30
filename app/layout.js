import "./globals.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

export const metadata = {
  title: "My Next.js App",
  description: "Professional layout with custom CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="site-body">
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
