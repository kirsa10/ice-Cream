import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <img src="https://img.freepik.com/premium-photo/yummy-ice-cream-food-photography-food-styling-ai-generated-photo_894117-754.jpg"
   alt="Ice Cream" style={{ width: '450px', height: '400px', flex: '0 0 auto', marginLeft: '30px' }} />
 
 <p style={{marginLeft:'30px', fontFamily: 'Helvetica, sans-serif', color: '#333', lineHeight: 2.5, marginBottom: '15px', fontWeight: 'bold', fontSize: '20px', flex: '1' }}>
      Welcome to Ice Cream Shop , where passion meets flavor in every scoop.<br/>
       Located in Erode, we blend the finest ingredients into creamy classics <br/>
       and bold, innovative flavors. Our shop is a place of community, where <br/>
       friends and families gather to share moments of joy over delicious ice cream. <br/>
       Step into Ice Cream Shop  and indulge in a journey of taste and tradition. <br/>
       Experience why we're beloved for our commitment to quality and warmth. <br/>
       Join us and discover the magic of ice cream done right.
      </p>
            
 
  </div>
<br/>
<br/>
<br/>
<br/>
<br/>
      <div className="about-content">
        <div className="mission">
        
          <h2>Our Mission</h2>
          <p>
            At Sweet Treats Ice Cream, our mission is to bring joy to our
            community through delicious, hand-crafted ice cream made with the
            finest ingredients. We believe in creating a welcoming environment
            where everyone can enjoy a moment of happiness with their favorite
            flavors.
          </p>
        </div>
       
        <div className="goal">
          <h2>Our Goal</h2>
          <p>
            Our goal is to be the go-to destination for ice cream lovers of all
            ages. We strive to innovate with new and exciting flavors while
            maintaining the highest standards of quality and customer service.
            Join us on this sweet journey and make every day a little more
            delightful.
          </p>
          
         
        </div>
        
        
      </div>
     
    </div>
   
  );
};

export default AboutUs;
