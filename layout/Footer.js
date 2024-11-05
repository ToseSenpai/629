'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = ({ footer = 1 }) => {
  return <DefaultFooter />;
};

export default Footer;

const DefaultFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Controlla lo scroll e mostra/nasconde il bottone
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Funzione per tornare in cima
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="main-footer bgc-black rel z-1">
      <div className="widget-area py-60">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xl-3 col-lg-4 col-sm-6 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={0}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <img src="assets/images/logos/logo.png" alt="Logo" />
                  </Link>
                </div>
                <div className="social-style-one">
                  <Link href="https://www.facebook.com" target="_blank" className="me-2">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="https://www.instagram.com" target="_blank">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-3 col-sm-6 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>Contattaci</h5>
                </div>
                <ul className="mt-4">
                  <li>
                    <a href="tel:0297298661" className="text-white">02 97298661</a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-3 col-sm-6 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget opening-hour">
                <div className="footer-title">
                  <h5>Orario</h5>
                </div>
                <ul className="mt-4">
                  <li className="mb-2">
                    Lun-Mar-Mer-Gio-Dom: <span className="text-warning">18:00 – 01:00</span>
                  </li>
                  <li>
                    Ven-Sab: <span className="text-warning">18:00 – 02:00</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-3 col-sm-6 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>Indirizzo</h5>
                </div>
                <ul className="mt-4">
                  <li>
                    Via De Medici 80
                    <br />
                    Magenta (Mi)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-15 border-top border-white border-opacity-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  Copyright 2024 <Link href="/">WebMinds</Link>. All Rights
                  Reserved{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
              </ul>
            </div>
          </div>
          <button
  className={`scroll-top scroll-to-target ${isVisible ? 'show' : ''}`}
  onClick={scrollToTop}
>
  <i className="fas fa-arrow-alt-up" />
</button>
        </div>
      </div>
    </footer>
  );
};