import Header from "./components/header";
import "bootstrap/scss/bootstrap.scss";
import bootstrap from "bootstrap";
import "./main.sass";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html>
        <body>
        <Header></Header>
        {children}
        </body>
        </html>
    )
}