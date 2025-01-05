import React, { useState } from "react";
import DefaultImg from "../images/DefaultImg.jpg"; // User profile image
import Profile from "./Profile"; // Import the actual Profile component

export default function Entry(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="UserEntry"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }} // To position the hover box
    >
      {/* User Profile Image */}
      
      {/* User Details */}
      <div className="UserDetails">

      <img 
        src={DefaultImg} 
        alt="User Profile" 
        className="UserProfile"
        style={{ cursor: "pointer" }} // Change cursor on hover
      />

        <span>{props.name}</span>
        <span>Points: {props.Points || "0"}</span>
        <span>Knows {props.language || "Not Specified"}</span>
        <span>Learning {props.languageLearn}</span>
      </div>

      {/* Profile Hover Box */}
      {isHovered && (
        <div
        style={{
          position: "absolute",
          top: "100%", // Position below the image
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          border: "1px solid #ddd",
          zIndex: 10,
          padding: "10px",
          borderRadius: "8px",
          width: "400px", // Adjust the size as needed
          height: "auto", // Let the height adjust based on content
          padding: "5px 10px",
          height: "20px",
          boxSizing: "border-box" // Ensure padding doesn't cause overflow
        }}
        >
          {/* Render the Profile component */}
          <Profile name = {props.name}/>
        </div>
      )}
    </article>
  );
}
