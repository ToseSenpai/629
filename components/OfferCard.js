const OfferCard = () => {
  return (
    <div className="offer-card-area">
      <div className="row no-gap row-cols-xxl-4 row-cols-xl-4 row-cols-lg-2 row-cols-sm-2 row-cols-1 justify-content-center">
        <div
          className="col"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">Hot</div>
            <div className="image" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="assets/images/offer/offer-card1.png" 
                alt="Food" 
                style={{ width: '400px', height: '400px', objectFit: 'contain' }}
              />
            </div>
            <span className="title">Burger</span>
            <span className="available-item">7+ tipi di hamburger</span>
            <div className="bg-text">
              <span>Burger</span> <span>Burger</span> <span>Burger</span>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="fade-up"
          data-aos-delay={50}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item style-two">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">Hot</div>
            <div className="image" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="assets/images/offer/offer-card2.png" 
                alt="Food" 
                style={{ width: '400px', height: '400px', objectFit: 'contain' }}
              />
            </div>
            <span className="title">Pizza</span>
            <span className="available-item">20+ tipi di pizza</span>
            <div className="bg-text">
              <span>Pizza</span> <span>Pizza</span> <span>Pizza</span>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">Hot</div>
            <div className="image" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="assets/images/offer/offer-card3.png" 
                alt="Food" 
                style={{ width: '400px', height: '400px', objectFit: 'contain' }}
              />
            </div>
            <span className="title">Snacks</span>
            <span className="available-item">10+ tipi di snacks</span>
            <div className="bg-text">
              <span>Snacks</span> <span>Snacks</span> <span>Snacks</span>
            </div>
          </div>
        </div>
        <div
          className="col"
          data-aos="fade-up"
          data-aos-delay={150}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="offer-card-item style-two">
            <img src="assets/images/offer/good-food.png" alt="Good Food" />
            <div className="badge">Sano</div>
            <div className="image" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="assets/images/offer/offer-card4.png" 
                alt="Food" 
                style={{ width: '300px', height: '300px', objectFit: 'contain' }}
              />
            </div>
            <span className="title">salads</span>
            <span className="available-item">3 tipi di insalate</span>
            <div className="bg-text">
              <span>salads</span> <span>salads</span> <span>salads</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfferCard;