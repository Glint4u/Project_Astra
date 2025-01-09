import "./globals.css";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Project Astra",
  description: "For the ambitious",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              zIndex: 1500,
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
