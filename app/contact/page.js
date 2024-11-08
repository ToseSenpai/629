import React from 'react';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="contact-header">
          <span className="contact-badge">
            Birreria Pizzeria 629
          </span>
          <h1 className="contact-title">
            Contattaci
          </h1>
          <div className="contact-divider"></div>
        </div>

        {/* Content Grid */}
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            {/* Address Card */}
            <div className="contact-card">
              <div className="card-content">
                <div className="icon-container">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="card-text">
                  <h3 className="card-label">Indirizzo</h3>
                  <p className="card-value">
                    Via Giacomo de Medici, 80,<br />
                    20013 Magenta MI
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-card">
              <div className="card-content">
                <div className="icon-container">
                  <i className="fal fa-phone" />
                </div>
                <div className="card-text">
                  <h3 className="card-label">Telefono</h3>
                  <a href="tel:0297298661" className="phone-link">
                    02 9729 8661
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="contact-card">
              <div className="card-content">
                <div className="icon-container">
                  <i className="fal fa-clock" />
                </div>
                <div className="card-text">
                  <h3 className="card-label">Orari</h3>
                  <p className="card-value">
                    Lun-Mar-Mer-Gio-Dom: 18:00 – 01:00<br />
                    Ven-Sab: 18:00 – 02:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11193.963704017147!2d8.849880704699487!3d45.459913708296256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786f10bd26d9c53%3A0x54e9793a9db8a218!2sBirreria%20Pizzeria%20629!5e0!3m2!1sit!2sit!4v1730794780880!5m2!1sit!2sit"
              className="map-frame"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
