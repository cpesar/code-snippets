import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Create Code Snippet",
// };
export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL),
  icons: {
    // icon: "/favicon.ico",
    // icon: [{ url: "./favicon.ico" }, { url: "/favicon.ico" }],
    // icon: [
    //   { rel: "icon", url: "/favicon.ico", sizes: "any" },
    //   { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
    // ],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head> */}
      <body className={inter.className}>
        <div className="container mx-auto px-12"> {children}</div>
      </body>
    </html>
  );
}
