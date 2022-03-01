import React from 'react';
import '../../App.css';

function AboutUs() {
  // return <div style={{  
  //   backgroundImage: `url(require("images/arcadia.jpg))`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat'
  // }}>
  return <div>
    <h1 className='aboutus'>
      About Us
    </h1>
    <img src='images/arcadia.jpg'
      style={{width:"3000", height:"3000", flex:"1"}}></img>
  </div>

    ;
}

export default AboutUs; 