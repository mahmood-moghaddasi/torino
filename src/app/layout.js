import Header from "@/components/templates/Header";
import "./globals.css";
import Footer from "@/components/templates/Footer";
import TanstackQueryProvider from "@/provider/TanstackQueryProvider";
import { ToastContainer } from "react-toastify";
import AuthForm from "@/components/templates/AuthForm";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <TanstackQueryProvider>
          <AuthForm />
          {children}
        </TanstackQueryProvider>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
