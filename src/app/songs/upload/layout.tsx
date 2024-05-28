import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function UploaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-stone-300">
      <body
        className={`${inter.className} bg-stone-300 min-h-screen overflow-hidden`}
        style={{ backgroundColor: "rgb(214 211 209)", minHeight: "100%" }}
      >
        {/* <h2>Hello</h2> */}
        {children}
      </body>
    </html>
  );
}
