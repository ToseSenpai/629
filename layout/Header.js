"use client";

import { wellfoodUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const Sidebar = () => {
  return (
    <Fragment>
      <div
        className="form-back-drop"
        onClick={() =>
          document
            .querySelector("body")
            .classList.remove("side-content-visible")
        }
      />
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div
            className="cross-icon"
            onClick={() =>
              document
                .querySelector("body")
                .classList.remove("side-content-visible")
            }
          >
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          <div className="appointment-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document
                  .querySelector("body")
                  .classList.remove("side-content-visible");
              }}
            >
              <div className="form-group">
                <input type="text" name="text" placeholder="Name" required="" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required="" />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn style-two">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          <div className="social-style-one">
            <Link href="contact">
              <i className="fab fa-twitter" />
            </Link>
            <Link href="contact">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link href="contact">
              <i className="fab fa-instagram" />
            </Link>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'visible';
  };

  return (
    <Fragment>
      <header className="main-header white-menu menu-absolute d-block d-xl-none">
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center justify-between px-4 py-4">
              <div className="logo-outer">
                <div className="logo-wrapper">
                  <Link href="/" className="logo-link">
                    <img 
                      src="assets/images/logos/logo.png" 
                      alt="Logo" 
                      title="Logo"
                      className="logo-image-mobile"
                    />
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center">
                <button 
                  className={`hamburger ${isOpen ? 'active' : ''}`} 
                  onClick={toggleMenu}
                  aria-label="Menu"
                >
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
          <button 
            className="close-button"
            onClick={toggleMenu}
            aria-label="Chiudi menu"
          >
            <span>×</span>
          </button>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <Link href="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="mobile-nav-item">
                <Link href="/menu" onClick={toggleMenu}>Menu</Link>
              </li>
              <li className="mobile-nav-item">
                <Link href="/contact" onClick={toggleMenu}>Contatti</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

const Header = () => {
  useEffect(() => {
    wellfoodUtility.fixedHeader();
  }, []);

  return (
    <Fragment>
      <header className="main-header menu-absolute d-none d-xl-block" style={{ position: 'relative', zIndex: 10 }}>
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center justify-between">
              <div className="logo-outer">
                <div className="logo-wrapper">
                  <Link href="/" className="logo-link">
                    <img 
                      src="assets/images/logos/logo.png" 
                      alt="Logo" 
                      title="Logo"
                      className="logo-image-desktop"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix ml-8">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix flex gap-4">
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/menu">Menu</Link></li>
                      <li><Link href="/contact">Contatti</Link></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>
      <MobileMenu />
      <Sidebar />
    </Fragment>
  );
};

export default Header;
