import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/providers/ClientProvider/ClientProvider";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "PRTech Solutions | Web & App Development Services",
    template: "%s | PRTech Solutions",
  },
  description:
    "PRTech Solutions builds high-performance websites and scalable web & mobile applications focused on real business outcomes.",
  metadataBase: new URL("https://prtech-solutions.com/"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "PRTech Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-secondary-50">
        <ClientProvider>{children}</ClientProvider>

        {/* Tawk.to Script */}
        <Script id="tawkto-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68977d3c6ec67e192b924fcb/1j29gpji7';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
