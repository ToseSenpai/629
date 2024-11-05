"use client";
import { wellfoodUtility } from "@/utility";
import useClickOutside from "@/utility/useClickOutside";
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
  const [toggle, setToggle] = useState(false);
  
  return (
    <Fragment>
      <header className="main-header white-menu menu-absolute d-block d-xl-none">
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo flex items-center">
                  <Link href="/" className="flex items-center">
                    <img 
                      src="assets/images/logos/logo.png" 
                      alt="Logo" 
                      title="Logo"
                      className="w-12 h-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix ml-8">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header py-10">
                    <div className="mobile-logo">
                      <Link href="/" className="flex items-center">
                        <img 
                          src="assets/images/logos/logo.png" 
                          alt="Logo" 
                          title="Logo"
                          className="w-12 h-auto"
                        />
                      </Link>
                    </div>
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse"
                      onClick={() => setToggle(!toggle)}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className={`navbar-collapse collapse clearfix ${toggle ? "show" : ""}`}>
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
    </Fragment>
  );
};

const Header = () => {
  useEffect(() => {
    wellfoodUtility.fixedHeader();
  }, []);

  return (
    <Fragment>
      <header className="main-header white-menu menu-absolute d-none d-xl-block" style={{ position: 'relative', zIndex: 10 }}>
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center justify-between">
              <div className="logo-outer">
                <div className="logo flex items-center">
                  <Link href="/" className="flex items-center">
                    <img 
                      src="assets/images/logos/logo.png" 
                      alt="Logo" 
                      title="Logo"
                      className="w-12 h-auto"
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