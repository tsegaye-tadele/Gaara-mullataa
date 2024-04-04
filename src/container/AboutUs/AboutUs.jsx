import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans abt">Gaara Mullataa is more than just a restaurant; it&apos;s a culinary sanctuary where Ethiopian tradition meets modern innovation. Nestled in the heart of the city, our cozy ambiance sets the stage for a memorable dining experience. With a commitment to authenticity and quality, we invite you to embark on a journey of flavor that celebrates the rich heritage of Ethiopian cuisine.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Started in 2020, Gaara Mullataa has been a beacon of culinary excellence since its inception. Our story began with a passion for sharing the vibrant flavors and cultural richness of with the world. Over the years, we have stayed true to our roots while embracing innovation, crafting a menu that honors tradition while delighting modern palates. With each dish, we pay homage to the centuries-old culinary heritage of Ethiopia, creating an unforgettable dining experience for our guests.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
