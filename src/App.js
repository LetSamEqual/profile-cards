import "./App.css";
import { Suspense, useEffect, useRef, useState } from "react";
import ProfileCards from "./components/profileCards/profileCards.component";
import NextButton from "./components/nextButtons/nextButton";
import PrevButton from "./components/preButtons/prevButton";
import GetRandomButton from "./components/getRandomButtons/getRandomButton";
import LoadingScreen from "./components/loadingState/loadingState";
import ProfileCardContainer from "./components/profileCardContainer/profileCardContainer";

function App() {
  const [profiles, setProfiles] = useState([]); //stores profiles from fetch
  const [curProfile, setCurProfile] = useState(0); //sets profile to display
  const [prevProfile, setPrevProfile] = useState(29);
  const [nextProfile, setNextProfile] = useState(1);
  const [loading, setLoading] = useState(false); // handles page loading
  const dataFetchedRef = useRef(false); // keeps fetch from calling twice

  // fetch robots on mount
  useEffect(() => {
    const getGitHubProfiles = async () => {
      setLoading(true); // handles loading page
      const data = await fetch(
        "https://random-data-api.com/api/users/random_user?size=30?page=1"
      );
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const results = await data.json();

      const formatResults = results.map((result) => {
        const anzDate = result.date_of_birth.split("-").reverse().join("/"); // converts date string to dd/mm/yyyy format
        let newProfile = { ...result, date_of_birth: anzDate }; // spreads results object and updates date format
        return newProfile; // this whole conversion step is so unnecessary but hey why not
      });

      setProfiles(formatResults);
      setLoading(false);
    };
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    getGitHubProfiles();
  }, []);

  const handleNextProfile = () => {
    if (nextProfile == 29) {
      setPrevProfile(28);
      setCurProfile(29);
      setNextProfile(0);
    } else if (curProfile == 29) {
      setPrevProfile(29);
      setCurProfile(0);
      setNextProfile(1);
    } else if (prevProfile == 29) {
      setPrevProfile(0);
      setCurProfile(1);
      setNextProfile(2);
    } else {
      setPrevProfile(prevProfile + 1);
      setNextProfile(nextProfile + 1);
      setCurProfile(curProfile + 1);
    }
  };

  const handlePrevProfile = () => {
    if (prevProfile == 0) {
      setPrevProfile(29);
      setCurProfile(0);
      setNextProfile(1);
    } else if (curProfile == 0) {
      setPrevProfile(28);
      setCurProfile(29);
      setNextProfile(0);
    } else if (nextProfile == 0) {
      setPrevProfile(27);
      setCurProfile(28);
      setNextProfile(29);
    } else {
      setPrevProfile(prevProfile - 1);
      setCurProfile(curProfile - 1);
      setNextProfile(nextProfile - 1);
    }
  };

  const handleRndmProfile = () => {
    const randomProfile = Math.floor(Math.random() * 30);
    if (randomProfile == 29) {
      setPrevProfile(28);
      setCurProfile(29);
      setNextProfile(0);
    } else if (randomProfile == 0) {
      setPrevProfile(29);
      setCurProfile(0);
      setNextProfile(1);
    } else {
      setPrevProfile(randomProfile - 1);
      setCurProfile(randomProfile);
      setNextProfile(randomProfile + 1);
    }
  };

  return (
    <div className='App'>
      {profiles.length > 1 && (
        <div className='cardContainer'>
        <ProfileCardContainer className="carousel" profiles={profiles} prevProfile={prevProfile} curProfile={curProfile} nextProfile={nextProfile} onClickHandlerPrev={handlePrevProfile} onClickHandlerNext={handleNextProfile}/>
        </div>
      )}
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className='btnContainer'>
          <PrevButton onClickHandler={handlePrevProfile} />
          <GetRandomButton onClickHandler={handleRndmProfile} />
          <NextButton onClickHandler={handleNextProfile} />
        </div>
      )}
    </div>
  );
}

export default App;
