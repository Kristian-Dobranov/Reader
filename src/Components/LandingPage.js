import React from "react";
import MyImage from "../Images/landing__page1.svg";

function LandingPage() {
  return (
    // Wave SVG
    <div className="svg__container">
      {/* svg */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7342d6" fill-opacity="1" d="M0,128L24,149.3C48,171,96,213,144,240C192,267,240,277,288,240C336,203,384,117,432,80C480,43,528,53,576,64C624,75,672,85,720,74.7C768,64,816,32,864,42.7C912,53,960,107,1008,122.7C1056,139,1104,117,1152,122.7C1200,128,1248,160,1296,181.3C1344,203,1392,213,1416,218.7L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
      {/* Landing Page Title */}
      <h1 className="landing__page--svg-header"><span className="text--black">Find your dream book with</span> <i class="fas fa-book"></i> Reader</h1>
      {/* Landing Page SVG */}
      <div className="landing__page--svg"><img src={MyImage} alt="landing_page--svg" /></div>
    </div>
  );
}

export default LandingPage;
