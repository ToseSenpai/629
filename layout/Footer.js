'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = ({ footer = 1 }) => {
  return <DefaultFooter />;
};

export default Footer;

const DefaultFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className={`main-footer rel z-1 footer-reveal ${isLoaded ? 'footer-loaded' : ''}`}>
      <div className="footer-bg">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
        <div className="footer-grid"></div>
      </div>

      <div className="widget-area py-60">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-sm-6 mb-4 mb-lg-0 text-center text-lg-start footer-column">
              <div className="footer-widget footer-text hover-up">
                <div className="footer-logo mb-25 d-flex justify-content-center justify-content-lg-start">
                  <Link href="/" className="logo-bounce">
                    <img src="assets/images/logos/logo.png" alt="Logo" className="footer-logo-img" />
                  </Link>
                </div>
                <div className="social-style-one social-hover-effect">
                  <Link href="https://www.facebook.com" target="_blank" className="social-icon me-2">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="https://www.instagram.com" target="_blank" className="social-icon">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-6 mb-4 mb-lg-0 text-center text-lg-start footer-column">
              <div className="footer-widget footer-contact hover-up">
                <div className="footer-title">
                  <h5 className="glowing-text">Contattaci</h5>
                </div>
                <ul className="mt-4 footer-links">
                  <li className="slide-up">
                    <a href="tel:0297298661" className="text-white hover-underline">02 97298661</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-6 mb-4 mb-lg-0 text-center text-lg-start footer-column">
              <div className="footer-widget opening-hour hover-up">
                <div className="footer-title">
                  <h5 className="glowing-text">Orario</h5>
                </div>
                <ul className="mt-4 footer-links">
                  <li className="mb-2 slide-up">
                    Lun-Mar-Mer-Gio-Dom: <span className="text-warning shine-effect">18:00 – 01:00</span>
                  </li>
                  <li className="slide-up">
                    Ven-Sab: <span className="text-warning shine-effect">18:00 – 02:00</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-6 mb-4 mb-lg-0 text-center text-lg-start footer-column">
              <div className="footer-widget footer-contact hover-up">
                <div className="footer-title">
                  <h5 className="glowing-text">Indirizzo</h5>
                </div>
                <ul className="mt-4 footer-links">
                  <li className="slide-up">
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

      <div className="footer-bottom pt-20 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start fade-in">
                <p>
                  Copyright 2024 <Link href="/" className="copyright-link">WebMinds</Link>. All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
          <button
            className={`scroll-top scroll-to-target ${isVisible ? 'show pulse' : ''}`}
            onClick={scrollToTop}
          >
            <i className="fas fa-arrow-alt-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};