//import { Navbar } from "components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export const metadata = {
  title: "Movies",
  description: "Movies App.",
};

function RootLayout({ children }) {
  return (
    <html>
      <body style={{ backgroundColor: "rgb(18, 53, 69)", color: "white" }}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
