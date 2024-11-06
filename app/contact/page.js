import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";

const ContactSection = () => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="mb-8">
              <span className="text-sm font-medium text-blue-600 block mb-2">
                Birreria Pizzeria 629
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                Contattaci
              </h2>
            </div>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="fal fa-map-marker-alt text-blue-600 text-xl" />
                  </div>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Indirizzo</span>
                  <h6 className="text-base font-medium text-gray-900">
                    Via Giacomo de Medici, 80, 20013 Magenta MI
                  </h6>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="fal fa-phone text-blue-600 text-xl" />
                  </div>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Telefono</span>
                  <h6 className="text-base font-medium text-gray-900">
                    <a href="tel:0297298661" className="hover:text-blue-600 transition-colors">
                      02 9729 8661
                    </a>
                  </h6>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="fal fa-clock text-blue-600 text-xl" />
                  </div>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Orari</span>
                  <h6 className="text-base font-medium text-gray-900">
                    Apre alle ore 18:00
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <div className="h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11193.963704017147!2d8.849880704699487!3d45.459913708296256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786f10bd26d9c53%3A0x54e9793a9db8a218!2sBirreria%20Pizzeria%20629!5e0!3m2!1sit!2sit!4v1730794780880!5m2!1sit!2sit"
                className="w-full h-[450px] rounded-lg shadow-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle="Contatti" />
      <section className="contact-page-area pt-130 rpt-100 pb-115 rpb-85 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div 
              className="col-lg-5"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="contact-page-content rmb-55">
                <ContactSection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </WellFoodLayout>
  );
};

export default Page;