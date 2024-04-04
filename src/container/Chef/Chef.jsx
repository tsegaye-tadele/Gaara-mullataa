import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensans"> As a chef at Gaara Mullataa, I blend tradition with innovation, infusing each dish with rich flavors. Our kitchen combines ancient recipes with modern techniques, creating an experience that resonates with every guest. Every plate pays tribute to culinary heritage, crafted with passion. At Gaara Mullataa, we create connections and memories that transcend cultural boundaries.</p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef</p>
      </div>
    </div>
  </div>
);

export default Chef;
