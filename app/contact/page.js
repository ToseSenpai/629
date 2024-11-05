import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";

const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Contatti"} />
      <section className="contact-page-area pt-130 rpt-100 pb-115 rpb-85 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="contact-page-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-35">
                  <span className="sub-title mb-10">Birreria Pizzeria 629</span>
                  <h2>Contattaci</h2>
                </div>
                <div className="contact-info-wrap">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <span className="title">Indirizzo</span>
                      <h6>
                        Via Giacomo de Medici, 80, 20013 Magenta MI
                      </h6>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-phone" />
                    </div>
                    <div className="content">
                      <span className="title">Telefono</span>
                      <h6>
                        <a href="tel:0297298661">02 9729 8661</a>
                      </h6>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="content">
                      <span className="title">Orari</span>
                      <h6>
                        Apre alle ore 18:00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <div
              className="col-lg-7"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="our-location h-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11193.963704017147!2d8.849880704699487!3d45.459913708296256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786f10bd26d9c53%3A0x54e9793a9db8a218!2sBirreria%20Pizzeria%20629!5e0!3m2!1sit!2sit!4v1730794780880!5m2!1sit!2sit"
                  style={{ 
                    border: 0, 
                    width: "100%", 
                    height: "450px",
                    borderRadius: "15px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)" 
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </WellFoodLayout>
  );
};

export default page;