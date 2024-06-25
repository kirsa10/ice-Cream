import React from 'react';
import './Services.css'; // Add your CSS here

const Services = () => {
  // Define an array of image paths and text content
  const content = [
    {
      title: 'Vanilla',
      img: 'https://img.freepik.com/premium-photo/soothing-vanilla-ice-cream-scoop_1106454-28500.jpg',
      text: 'Indulge in our delightful range of ice creams, crafted with the finest ingredients. From classic vanilla to exotic flavors, our ice creams are sure to satisfy your sweet tooth. Visit us to experience the creamy texture and rich taste that make our ice creams the best in town.'
    },
    {
      title: 'Chocolate',
      img: 'https://t3.ftcdn.net/jpg/05/93/07/06/360_F_593070619_uLMSjzAsSPzkjRD2BDluplX1UqLL7nBO.jpg',
      text: 'Experience the unique taste of our hand-churned ice creams, available in a variety of seasonal flavors. Made with locally sourced ingredients, each scoop is a journey of taste and texture.'
    },
    {
      title: 'Cookies & Cream',
      img: 'https://img.freepik.com/premium-photo/closeup-scoop-cookies-cream-ice-cream-with-oreo-cookies-top_1023514-79.jpg',
      text: 'Our ice creams are made with love and passion. Whether you prefer a scoop in a cone or a sundae with all the toppings, we have something for everyone. Come and treat yourself!'
    },
    {
      title: 'Buttered Pecan',
      img: 'https://www.simplyrecipes.com/thmb/7n24DH-_DJs7khvFxY4Pb1Lsgjg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Butter-Pecan-Ice-Cream-LEAD-5-a0fd1edc9c7f47f1b340699ad4cb0365.jpg',
      text: 'Discover our signature ice cream cakes, perfect for any celebration. Layered with rich ice cream and delightful toppings, our cakes are a crowd-pleaser.'
    },
    {
      title: 'Strawberry',
      img: 'https://t4.ftcdn.net/jpg/05/93/07/05/360_F_593070598_gscqHV1vMfrCD3yH44yBPfn7JZmHFTcL.jpg',
      text: 'We also offer a range of dairy-free and vegan ice creams, so everyone can enjoy the sweet goodness of our frozen treats. Come and try our popular coconut milk ice cream!'
    },
    {
      title: 'Mint Chocolate Chip',
      img: 'https://img.freepik.com/premium-photo/photo-mint-chocolate-chip-ice-cream_933496-16299.jpg',
      text: 'Looking for something unique? Try our gourmet ice cream sandwiches, featuring homemade cookies and our premium ice creams. They are a perfect treat for any occasion.'
    },
    {
      title: 'Chocolate Chips Cookie Dough',
      img: 'https://img.freepik.com/premium-photo/chocolate-chip-cookie-dough-ice-cream-with-swirls-vanilla-chunks-cookie-dough_670421-16284.jpg',
      text: 'Join us for our weekly ice cream making workshops where you can learn to make your favorite flavors from scratch. It’s fun for the whole family!'
    },
    {
      title: 'Rocky Road',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR97mNQSpVKZWbFl4X-Fm6E1unC0xNAAUUUcrAg6n2jRCcQ_o6Z9YDP7nK3emCswaEBYec&usqp=CAU',
      text: 'Our ice cream trucks are available for private events and parties. Let us bring the joy of our delicious ice creams to your next event.'
    },
    {
      title: 'Chocolate Chip',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfCWx3uwjfVjThtH7UIlC54eceDqpOQmL1d2fr8iyD_ZZg-EEEL7UKXe7qo2J32F4ijo&usqp=CAU',
      text: 'We pride ourselves on our customer service. Our friendly staff is always ready to help you choose the perfect ice cream or topping combination.'
    },
    {
      title: 'Pistachio',
      img: 'https://t3.ftcdn.net/jpg/07/02/57/34/360_F_702573465_n5YmASmhf3izt9Q8ah5pIoh0TryR4u5X.jpg',
      text: 'Visit our store today and enjoy a cozy ambiance, free Wi-Fi, and a variety of board games while you savor our delectable ice creams.'
    }
  ];

  return (
    <div className='service-container'>
      <h1>Products</h1>
      <br />
      {content.map((item, index) => (
        <div className={`row ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`} key={index}>
          <div className='col'>
            <h4>{item.title}</h4>
            <img src={item.img} alt={`Ice Cream ${index + 1}`} className='service-image'width={500} height={500}  />
          </div>
          <div className='col'>
            <p style={{fontFamily:'cursive',fontSize:'25px'}}>{item.text} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
