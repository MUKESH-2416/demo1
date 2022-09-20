import React from "react";
import './Home.css';
import img1 from "./Icons/logo.png";
import img2 from "./Icons/icon1.png";
import img3 from "./Icons/icon2.png";
import img4 from "./Icons/university.jpg";
function Home(){
  return(
    <>
    <div className="page">
    <body className="body">
      <div className="header">
        <div className="left">
          <img className="logo" src={img1} alter="image"></img>
       
        </div>
        <div className="middle">
          
        </div>
        <div className="right">
        <a className="home" href="">Home</a>
        <a className="dashboard" href="">Dashboard</a>
        <a className="mycourses" href="">My Courses</a>
        <img className="menu" src={img2} alter="image"></img>
        <img className="profile" src={img3} alter="image"></img>
        </div>
      </div>
      <div className="grid1">
       <img className="banner" src={img4} alter="image"></img>
      </div>
      <div className="grid">
        <div className="c1">
        <button className="buttoncs">
          COMPUTER SCIENCE
        </button>
        </div>
        <div className="c2">
        <button className="buttoncs">
          MECHANICAL ENGINEERING
        </button>
        </div>
        <div className="c3">
        <button className="buttoncs">
          CIVIL ENGINEERING
        </button>
        </div>
        <div className="c4">
        <button className="buttoncs">
          CHEMICAL ENGINEERING
        </button>
        </div>
      </div>
      <div className="grid">
        <div className="c5">
          <button className="buttoncs">
          INFORMATION TECHNOLOGY
        </button>
        </div>
        <div className="c6">
        <button className="buttoncs">
          BIOMEDICAL ENGINEERING
        </button>
        </div>
        <div className="c7">
        <button className="buttoncs">
          ELECTRICAL AND ELECTRONICS ENGINEERING
        </button>
        </div>
        <div className="c8">
        <button className="buttoncs">
          ELECTRONICS AND COMMUNICATION ENGINEERING
        </button>
        </div>
      </div>

    </body>
    </div>
   
    </>
  );
}
export default Home;