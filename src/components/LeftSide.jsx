import React from "react";
import './LeftSide.css'

const RightSide = () => {
  return (
    <div className="left-container">
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div>
        <ul  type="none">
          <li>anxdidani@gmail.com</li>
          <li>Teodor Keko Street, Tirana</li>
          <li>21 years old</li>
          <li>Albanian</li>
          <li>Drivers Licence B</li>
          <li>+355 69 2091 321</li>
        </ul>
      </div>
      <div>
        <h4>Languages</h4>
        <ul  type="none">
          <li>English C1</li>
          <li>Italian B1</li>
          <li>German A2</li>
        </ul>
      </div>
      <div>
        <h4>Assets</h4>
        <ul  type="none">
          <li>Confidence</li>
          <li>Leadership</li>
          <li>Problem Solving</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Detail Oriented</li>
        </ul>
      </div>
      <div>
        <h4>Social networks</h4>
        <ul type="none">
          <li>
            Github: <em>ididani</em>
          </li>
          <li>
            Instagram: <em>annxdidani</em>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
