import Header from "@/components/templates/Header";
import "./globals.css";
import Footer from "@/components/templates/Footer";
import TanstackQueryProvider from "@/provider/TanstackQueryProvider";
import { ToastContainer } from "react-toastify";
import AuthForm from "@/components/templates/AuthForm";
import LoginContextProvider from "@/provider/LoginContextProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <TanstackQueryProvider>
          <LoginContextProvider>
            <Header />
            <AuthForm />
            {children}
          </LoginContextProvider>
        </TanstackQueryProvider>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
