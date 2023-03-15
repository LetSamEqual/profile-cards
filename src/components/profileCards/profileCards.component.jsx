import { useEffect, useState } from "react";
import "./profileCards.styles.css";

const ProfileCards = ({ profiles, currentProfile }) => {


  return (
    <div className='profileCardContainer'>
      <div className='imageContainer'>
        <img src={profiles[currentProfile].avatar} className='profilePic' />
      </div>
      <div className='mainHeading'>
        <h1>
          {profiles[currentProfile].first_name} {profiles[currentProfile].last_name}
        </h1>
      </div>
      <div className='bodyText'>
        <h3>Manufacture date: <span className="infoLabel">{profiles[currentProfile].date_of_birth}</span></h3>
        <h3>Function: <span>{profiles[currentProfile].employment.title}</span></h3>
        <h3>Primary skill: <span>{profiles[currentProfile].employment.key_skill}</span></h3>
        <h3>Email: <span>{profiles[currentProfile].email}</span></h3>
        <h3>Phone: <span>{profiles[currentProfile].phone_number}</span></h3>
      </div>
    </div>
  );
};

export default ProfileCards;
