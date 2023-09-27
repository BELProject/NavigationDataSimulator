import React from "react";
import "./Position.css";

function Position() {
  return (
    <div className="flex-container">
      <div className="gps-location">
        <h3>GPS LOCATION</h3>
        <div className="flex-row">
          <span style={{ justifyContent: "flex-start" }}>Latitude : </span>
          <div>
          <input />
          </div>
        </div>
        <div>
          <span>Longitude : </span>
          <input />
        </div>
      </div>
      <div className="gps-location">
        <h3>INS Position</h3>
        <div>
          <span>Latitude : </span>
          <input />
        </div>
        <div>
          <span>Longitude : </span>
          <input />
        </div>
        <div>
          <span>Depth : </span>
          <input />
        </div>
      </div>
      <div className="gps-location">
        <h3>INS POSITION ACCURACY</h3>
        <div>
          <span>Lat. Accuracy : </span>
          <input />
        </div>
        <div>
          <span>Long. Accuracy : </span>
          <input />
        </div>
        <div>
          <span>Postn. Corr : </span>
          <input />
        </div>
      </div>
      <div className="gps-location">
        <h3>INS VELOCITY</h3>
        <div>
          <span>North Velocity : </span>
          <input />
        </div>
        <div>
          <span>East Velocity : </span>
          <input />
        </div>
        <div>
          <span>Down Velocity : </span>
          <input type="text" />
        </div>
      </div>
      <div className="gps-location">
        <h3>STATUS 1</h3>
        <div>
          <span>Bite : </span>
          <input />
        </div>
        <div>
          <span>Mode : </span>
          <input />
        </div>
        <div>
          <span>AHR Validity : </span>
          <input />
        </div>
      </div>
    </div>
  );
}

export default Position;
