import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "나 오늘 뭐 개발했지?",
  description: "나 오늘 뭐 개발했지?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
