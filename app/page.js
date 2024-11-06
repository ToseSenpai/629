"use client";
import Image from 'next/image';
import Counter from "@/components/Counter";


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
                <div className="section-title mb-6 flex flex-col items-center">
          <span className="sub-title mb-2 text-white-600 ${subtitleSize}">APERTI 7 GIORNI SU 7</span>
          <h2 className="text-2xl font-bold">BIRRERIA PIZZERIA</h2>
        </div>

        <div className="about-btn-author pt-5 mb-45 flex justify-center">
          <button className="bg-[#1877F2] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 ${buttonSize}">
            PRENOTA SUBITO →
          </button>
          </div>
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
<div className="headline-area pt-40 rpt-45 rel z-1">
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
<section className="about-us-area pt-20 rpt-55 pb-100 rpb-70 rel z-1">
  <div className="container">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="col-lg-6">
        <div className="about-image-part mb-30 rmb-55 text-center md:text-left" 
          data-aos="fade-right" 
          data-aos-duration={1500}>
          <img 
            src="/assets/images/about/about.png" 
            alt="About"
            className="mx-auto md:mx-0" // Centro l'immagine su mobile
          />
          <div className="quality-food text-center" 
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
        <div className="about-us-content text-center md:text-left" 
          data-aos="fade-left" 
          data-aos-duration={1500}
        >
           <div className="section-title mb-6 flex flex-col items-center">
          <span className="sub-title mb-2 text-blue-600 ${subtitleSize}">APERITIVO</span>
          <h2 className="text-2xl font-bold">TUTTI I GIORNI</h2>
        </div>
        <p className="text-center mb-8">Dalle 18.00 alle 20.00</p>
        <div className="about-btn-author pt-5 mb-45 flex justify-center">
          <button className="bg-[#1877F2] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 ${buttonSize}">
            PRENOTA SUBITO →
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div className="flex flex-col items-center">
            
          </div>
          <div className="flex flex-col items-center">
            
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
      
     
      
    
    </WellFoodLayout>
  );
};
export default page;
