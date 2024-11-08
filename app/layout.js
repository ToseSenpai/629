"use client";

import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {metadata} from "./metadata";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

export default function RootLayout({children}) {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Controlla se la larghezza dello schermo è quella di un dispositivo mobile
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Esegui il controllo al montaggio del componente
        window.addEventListener("resize", handleResize); // Aggiorna al ridimensionamento

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const showFooter = !(pathname === "/food" && isMobile);

    return (
        <html lang="en">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
        </head>
        <body>
        <Header/>
        <main>{children}</main>
        {showFooter && <Footer/>}
        </body>
        </html>
    );
}
