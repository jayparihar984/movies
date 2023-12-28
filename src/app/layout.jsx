//import { Navbar } from "components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";

export const metadata = {
  title: "NextMongo",
  description: "NextMongo is a simple app to manage tasks.",
}

function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
