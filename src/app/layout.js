//styles
import "./globals.css";
//font
import { Poppins } from "next/font/google";

// //components
import NavBar from "@/components/mainLayout/navbar/NavBar";
import Footer from "@/components/mainLayout/Footer";

//providers
import { Providers } from "@/redux/provider";
import { PayPalProvider } from "@/components/providers/PayPalProvider";
import { SessionProvi } from "@/components/providers/SessionProvi";
import { ToastClinte } from "@/components/providers/ToastClinte";

//font setting
const poppins = Poppins({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

//metaData
export const metadata = {
  title: {
    default: "Mo Commerce",
    template: "%s | Mo Commerce",
  },
  description: "The React Framework for the Web",
  applicationName: "Next.js",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Seb" }, { name: "Josh" }],
  url: "https://nextjs-13-full-stack-ecommerce-l26ssvc4k-muhammadsamir1212.vercel.app",
  metadataBase: new URL(
    "https://nextjs-13-full-stack-ecommerce-l26ssvc4k-muhammadsamir1212.vercel.app"
  ),
  openGraph: {
    title: "Mo Commerce",
    description: "The React Framework for the Web",
    url: "https://nextjs-13-full-stack-ecommerce-l26ssvc4k-muhammadsamir1212.vercel.app",
    siteName: "Mo Ecommerce",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="w-full overflow-hidden">
          <ToastClinte />
          <SessionProvi>
            <PayPalProvider>
              <Providers>
                {/* NavBar */}
                <nav className="fixed top-0 z-10 w-full shadow-sm bg-primary">
                  <NavBar />
                </nav>

                {/* Main */}
                <main className="w-full">{children}</main>
                {/* Footer */}
                <footer className="w-full bg-primary">
                  <Footer />
                </footer>
              </Providers>
            </PayPalProvider>
          </SessionProvi>
        </div>
      </body>
    </html>
  );
}
