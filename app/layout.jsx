import { luckyGame } from "./ui/font";
import "./globals.css";

export const metadata = {
  title: "laboro",
  description: "The next Afro centric event and ticketing website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={luckyGame.className}>{children}</body>
    </html>
  );
}
