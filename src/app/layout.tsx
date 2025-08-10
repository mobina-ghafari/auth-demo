import "./globals.scss";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app-body">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
