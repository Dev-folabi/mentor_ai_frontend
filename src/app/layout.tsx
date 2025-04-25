import "./globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "Mentor AI",
  description: "Personalized Career Guide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>

      <Toaster
        position="top-right"
        richColors
        theme="dark"
        toastOptions={{
          className: "glassmorphic-toast",
          style: {
            borderRadius: 12,
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#fff",
          },
        }}
      />
    </html>
  );
}
