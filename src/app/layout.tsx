import { Providers } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Realtime Chat App",
  description: "Realtime Chat App - more later",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
