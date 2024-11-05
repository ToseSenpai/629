"use client";
import Image from 'next/image';
import Counter from "@/components/Counter";
import OfferCard from "@/components/OfferCard";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      {/* Hero Area Start */}
      <section
        className="hero-area bgs-cover pt-180 rpt-150 pb-100 rel z-1"
        style={{ backgroundImage: "url(assets/images/background/hero.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content text-white"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-35">
                  <i className="far fa-hamburger" /> Aperti 7 giorni su 7
                </span>
                <h1>BIRRERIA PIZZERIA</h1>
                <p></p>
                <Link href="menu-chicken" className="theme-btn">
                  View All Menu <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="hero-images rmt-60">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
                
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape1.png" alt="Hero Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-shape2.png" alt="Hero Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/hero-shape3.png" alt="Hero Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/shapes/hero-shape4.png" alt="Hero Shape" />
          </div>
          <div className="shape five">
            <img src="assets/images/shapes/hero-shape5.png" alt="Hero Shape" />
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Headline area start */}
<div className="headline-area pt-60 rpt-45 rel z-1">
  <span className="marquee-wrap">
    <span className="marquee-inner left">
      <span className="marquee-item">629</span>
      <span className="marquee-item"><i className="flaticon-star" /></span>
      <span className="marquee-item">629</span>
      <span className="marquee-item"><i className="flaticon-star" /></span>
      <span className="marquee-item">629</span>
      <span className="marquee-item"><i className="flaticon-star" /></span>
    </span>
    <span className="marquee-inner left">
      <span className="marquee-item">629</span>
      <span className="marquee-item"><i className="flaticon-star" /></span>
      <span className="marquee-item">629</span>
      <span className="marquee-item"><i className="flaticon-star" /></span>
      <span className="marquee-item">629</span>
      <span className="marquee-item"><i className="flaticon-star" /></span>
    </span>
    <span className="marquee-inner left">
      <span className="marquee-item">629</span>
      <span className="marquee-item"><i className="flaticon-star" /></span>
      <span className="marquee-item">629</span>
      <span className="marquee-item"><i className="flaticon-star" /></span>
      <span className="marquee-item">629</span>
      <span className="marquee-item"><i className="flaticon-star" /></span>
    </span>
  </span>
  <div className="headline-shapes">
    <div className="shape one">
      <img src="assets/images/shapes/chillies.png" alt="Shape" />
    </div>
    <div className="shape two">
      <img src="assets/images/shapes/tomato.png" alt="Shape" />
    </div>
  </div>
</div>
{/* Headline Area end */}
      {/* About Us Area start */}
<section className="about-us-area pt-80 rpt-55 pb-100 rpb-70 rel z-1">
  <div className="container">
    <div className="row align-items-end">
      <div className="col-lg-6">
        <div className="about-image-part mb-30 rmb-55" 
          data-aos="fade-right" 
          data-aos-duration={1500}
        >
          {/* Modificato qui: da Image a img */}
          <img 
            src="/assets/images/about/about.png" 
            alt="About"
          />
          <div className="quality-food" 
            style={{
              backgroundImage: "url(assets/images/shapes/about-star.png)",
            }}
          >
            <span className="for-border" />
            <span className="text">
              A SOLI <br /> 8 EURO
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-us-content" 
          data-aos="fade-left" 
          data-aos-duration={1500}
        >
          <div className="section-title mb-25">
            <span className="sub-title mb-5">Aperitivo</span>
            <h2>Tutti i giorni</h2>
          </div>
          <p>Dalle 18.00 alle 20.00</p>
          <div className="about-btn-author pt-5 mb-45">
            <Link href="about" className="theme-btn style-two">
              Prenota subito <i className="far fa-arrow-alt-right" />
            </Link>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="service-item style-two">
                <div className="icon">
                  <i className="flaticon-high-quality" />
                </div>
                <h5>
                  <Link href="menu-burger"></Link>
                </h5>
                <p></p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="service-item style-two">
                <div className="icon">
                  <i className="flaticon-chef" />
                </div>
                <h5>
                  <Link href="menu-burger"></Link>
                </h5>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="about-shapes">
    <div className="shape one">
      <img src="assets/images/shapes/pizza-three.png" alt="Shape" />
    </div>
  </div>
</section>
{/* About Us Area end */}
      {/* Offer Card Area start */}
      <OfferCard />
      {/* Offer Card Area end */}
     
      
    
    </WellFoodLayout>
  );
};
export default page;
