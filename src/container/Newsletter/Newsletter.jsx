import React from 'react';
import {NewsLetterOverlay, SubHeading} from '../../components'
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter '>

    <NewsLetterOverlay/>

    <div className="newsletter">
      <div className="newsletter-heading">
        <SubHeading title='Newsletter'/>
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>

      <div className="newsletter-input flex__center">
        <input type="email" placeholder='Enter your email address' />
        <button type='button' className='custom__button'>Subscribe</button>
      </div>
    </div>
  </div>
);

export default Newsletter;
