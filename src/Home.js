// Home.js

import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div>
    <div className="home" >
      <h1>Welcome to Our Ice Cream Shop</h1>
      <p>Enjoy the best ice cream in town!</p>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <center>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', animation: 'fadeIn 2s' }}>
  <p style={{ fontFamily: 'Helvetica, sans-serif', color: '#333', lineHeight: 2.5, marginBottom: '20px', fontWeight: 'bold', fontSize: '20px', flex: '1', transition: 'transform 0.3s', ':hover': { transform: 'scale(1.05)' } }}>
    Creating homemade ice cream is a delightful process that begins
    with preparing a rich, creamy base of heavy cream, whole milk, sugar
    and vanilla extract. After chilling the mixture to enhance its flavors,
    it's poured into an ice cream maker to churn until it reaches a smooth,
    soft-serve consistency. Once churned, the ice cream is transferred to a
    freezer-safe container, where it freezes until firm. The joy of making ice
    cream lies in customizing flavors—whether it's adding swirls of fruit puree
    for a refreshing twist, mixing in crunchy nuts or cookie dough for texture, or
    infusing exotic spices and savory ingredients for a unique taste experience.
    Experimenting with ingredients allows for endless possibilities, from classic
    favorites like chocolate and caramel to adventurous combinations inspired by global
    cuisines or seasonal fruits. Homemade ice cream not only offers creative freedom but
    also ensures a fresh, decadent treat that can be enjoyed with friends and family on any occasion.
  </p>
  <img src="https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11.jpg" alt="Ice Cream" style={{ width: '40%', height: 'auto', flex: '0 0 auto', marginLeft: '20px', transition: 'transform 0.3s', ':hover': { transform: 'scale(1.05)' } }} />
</div>
 </center>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>



      <div id="product">
      <center>
        <h2 style={{ fontFamily: 'cursive', color: 'rgb(87, 127, 199)' }}>PRODUCTS</h2>
      </center>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="zoom">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXdiZVvsiZCXKTX0Crs-47PD5KRvFQiRLTg&s"
                className="img-thumbnail"
                alt="Image 1"
              />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="zoom">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQmpap-gI82PVccrpjd6yTvojpWqZcsHWvw&s"
                className="img-thumbnail"
                alt="Image 2"
              />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="zoom">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnIp0p52EJZf2nMNO2vlgzEyjpJLRPyqiOg&ss"
                className="img-thumbnail"
                alt="Image 3"
              />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="zoom">
              <img
                src="https://vaya.in/recipes/wp-content/uploads/2018/12/Blackcurrant-Ice-Cream.jpg"
                className="img-thumbnail"
                alt="Image 4"
              />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="zoom">
              <img
                src="data:image/jpeg;base64,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"
                className="img-thumbnail"
                alt="Image 5"
              />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="zoom">
              <img
                src="https://img.freepik.com/premium-photo/ice-cream-collection-with-cup-mix-fruits-topping-cinematic-editorial-food-photography_920594-17093.jpg"
                className="img-thumbnail"
                alt="Image 6"
              />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="zoom">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvs-PfdccVfbH2Lh8El0Rralf7QoEslvH8RvwVdcHmxt1PC8hZCUBkOyEReva_LxMF6s&usqp=CAU"
                className="img-thumbnail"
                alt="Image 7"
              />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="zoom">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJq-hJg-sKSuXyyVegq6LFRZJqGBadulDoofUKRcSNEdmj5frCLSCZXSn2oD-9n8osCc&usqp=CAU"
                className="img-thumbnail"
                alt="Image 8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
