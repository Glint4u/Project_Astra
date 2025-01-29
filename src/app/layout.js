import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { Inter } from "next/font/google";
import { Koulen } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisableContextMenu from "@/components/DisableContextMenu";
import { AuthProvider } from "@/context/authContext";


export const metadata = {
  title: "Project Astra",
  description: "For the ambitious",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {/* <DisableContextMenu/> */}
          <Navbar />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                zIndex: 1500000,
              },
            }}
          />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
