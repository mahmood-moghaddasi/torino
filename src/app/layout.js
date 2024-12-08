import Header from "@/components/templates/Header";
import "./globals.css";
import Footer from "@/components/templates/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
