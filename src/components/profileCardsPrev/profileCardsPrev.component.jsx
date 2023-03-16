import { useEffect, useState } from "react";
import './profileCardsPrev.styles.css'

const PrevProfileCards = ({ profiles, displayProfile, onClickHandlerPrev }) => {


  return (
    <div className='prevProfileCardContainer' onClick={onClickHandlerPrev}>
      <div className='prevImageContainer'>
        <img src={profiles[displayProfile].avatar} className='prevProfilePic' />
      </div>
      <div className='prevMainHeading'>
        <h1>
          {profiles[displayProfile].first_name} {profiles[displayProfile].last_name}
        </h1>
      </div>
      <div className='prevBodyText'>
        <h3>Manufacture date: <span className="prevInfoLabel">{profiles[displayProfile].date_of_birth}</span></h3>
        <h3>Function: <span lassName="prevInfoLabel">{profiles[displayProfile].employment.title}</span></h3>
        <h3>Primary skill: <span lassName="prevInfoLabel">{profiles[displayProfile].employment.key_skill}</span></h3>
        <h3>Email: <span lassName="prevInfoLabel">{profiles[displayProfile].email}</span></h3>
        <h3>Phone: <spa lassName="prevInfoLabel"n>{profiles[displayProfile].phone_number}</spa></h3>
      </div>
    </div>
  );
};

export default PrevProfileCards;
