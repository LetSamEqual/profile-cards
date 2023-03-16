import "./profileCardContainer.css";

import ProfileCards from "../profileCards/profileCards.component";
import PrevProfileCards from "../profileCardsPrev/profileCardsPrev.component";
import NextProfileCards from "../profileCardsNext/profileCardsNext.component";

const ProfileCardContainer = ({profiles, prevProfile, curProfile, nextProfile, onClickHandlerPrev, onClickHandlerNext}) => {
  return (
    <div className="carouselContainer">
      <PrevProfileCards profiles={profiles} displayProfile={prevProfile} onClickHandlerPrev={onClickHandlerPrev} className="prevProfileContainer"/>
      <ProfileCards profiles={profiles} displayProfile={curProfile} className="curProfileContainer"/>
      <NextProfileCards profiles={profiles} displayProfile={nextProfile} onClickHandlerPrev={onClickHandlerNext} className="nextProfileContainer"/>
    </div>
  );
};

export default ProfileCardContainer;
