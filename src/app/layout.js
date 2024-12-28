import Header from "@/components/templates/Header";
import "./globals.css";
import Footer from "@/components/templates/Footer";
import TanstackQueryProvider from "@/provider/TanstackQueryProvider";
import { ToastContainer } from "react-toastify";
import AuthForm from "@/components/templates/AuthForm";
import LoginContextProvider from "@/provider/LoginContextProvider";
import SidbarMenu from "@/components/templates/SidbarMenu";
import SidebarContextProvider from "@/provider/SidebarContextProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <TanstackQueryProvider>
          <LoginContextProvider>
            <SidebarContextProvider>
              <Header />
              <SidbarMenu />
              <AuthForm />
              {children}
            </SidebarContextProvider>
          </LoginContextProvider>
        </TanstackQueryProvider>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
