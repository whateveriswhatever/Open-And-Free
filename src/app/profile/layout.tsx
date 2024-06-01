import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-white"
      style={{
        backgroundColor: "rgb(156 163 175)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "696px",
      }}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
