import React from 'react';
import SubscribeLeft from "../assets/subscribe.jpg";
import "../styles/Subscribe.css";

function Subscribe() {
  return (
    <div className='subscribe'>
      <div
        className='leftSide'
        style={{ backgroundImage: `url(${SubscribeLeft})`, backgroundSize: "contain" }}
      ></div>
      <div className="rightSide">
        <h1> Don't miss out! </h1>
        <p>Subsribe to our e-mail list!</p>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <button type="submit"> Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
