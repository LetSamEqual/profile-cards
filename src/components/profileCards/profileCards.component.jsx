import { useEffect, useState } from "react";
import "./profileCards.styles.css";

const ProfileCards = ({ profiles, displayProfile }) => {


  return (
    <div className='profileCardContainer'>
      <div className='imageContainer'>
        <img src={profiles[displayProfile].avatar} className='profilePic' />
      </div>
      <div className='mainHeading'>
        <h1>
          {profiles[displayProfile].first_name} {profiles[displayProfile].last_name}
        </h1>
      </div>
      <div className='bodyText'>
        <h3>Manufacture date: <span className="infoLabel">{profiles[displayProfile].date_of_birth}</span></h3>
        <h3>Function: <span lassName="infoLabel">{profiles[displayProfile].employment.title}</span></h3>
        <h3>Primary skill: <span lassName="infoLabel">{profiles[displayProfile].employment.key_skill}</span></h3>
        <h3>Email: <span lassName="infoLabel">{profiles[displayProfile].email}</span></h3>
        <h3>Phone: <spa lassName="infoLabel"n>{profiles[displayProfile].phone_number}</spa></h3>
      </div>
    </div>
  );
};

export default ProfileCards;
