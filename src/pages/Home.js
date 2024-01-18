import React from "react";
import BannerVideo from "../assets/Mayhem.mp4";
import "../styles/Home.css";

function Home() {
  const redirectToAnotherWebsite = () => {
    window.location.href = 'https://store.steampowered.com/'; // Yönlendirilecek URL'yi buraya ekleyin
  };
  
  return (
    <div className="home">
      <video autoPlay loop className="banner-video">
          <source src={BannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="headerContainer">
        <h1> MAYHEM </h1>
        <p> 3D FPS Shooter Game</p>
        <button onClick={redirectToAnotherWebsite}>GET NOW</button>
      </div>
    </div>
  );
}

export default Home;
