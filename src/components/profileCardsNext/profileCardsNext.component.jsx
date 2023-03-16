import { useEffect, useState } from "react";
import './profileCardsNext.styles.css'

const NextProfileCards = ({ profiles, displayProfile }) => {


  return (
    <div className='nextProfileCardContainer'>
      <div className='nextImageContainer'>
        <img src={profiles[displayProfile].avatar} className='nextProfilePic' />
      </div>
      <div className='nextMainHeading'>
        <h1>
          {profiles[displayProfile].first_name} {profiles[displayProfile].last_name}
        </h1>
      </div>
      <div className='nextBodyText'>
        <h3>Manufacture date: <span className="nextInfoLabel">{profiles[displayProfile].date_of_birth}</span></h3>
        <h3>Function: <span lassName="nextInfoLabel">{profiles[displayProfile].employment.title}</span></h3>
        <h3>Primary skill: <span lassName="nextInfoLabel">{profiles[displayProfile].employment.key_skill}</span></h3>
        <h3>Email: <span lassName="nextInfoLabel">{profiles[displayProfile].email}</span></h3>
        <h3>Phone: <spa lassName="nextInfoLabel"n>{profiles[displayProfile].phone_number}</spa></h3>
      </div>
    </div>
  );
};

export default NextProfileCards;
