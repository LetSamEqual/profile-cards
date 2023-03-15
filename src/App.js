import "./App.css";
import { useEffect, useRef, useState } from "react";
import ProfileCards from "./components/profileCards/profileCards.component";
import NextButton from "./components/nextButtons/nextButton";
import PrevButton from "./components/preButtons/prevButton";
import GetRandomButton from "./components/getRandomButtons/getRandomButton";

function App() {
  const [profiles, setProfiles] = useState([]); //stores profiles from fetch
  const [curProfile, setCurProfile] = useState(0); //sets profile to display
  const dataFetchedRef = useRef(false); // keeps fetch from calling twice


// fetch robots on mount
  useEffect(() => {
    const getGitHubProfiles = async () => {
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

    };
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getGitHubProfiles();
  }, []);

  const handleNextProfile = () => {
    if(curProfile == 29){
      setCurProfile(0)
      return
    }
    setCurProfile(curProfile + 1)
    console.log('fired')
  }

  const handlePrevProfile = () => {
    if(curProfile == 0){
      setCurProfile(28)
      return
    }
    setCurProfile(curProfile -1)
    console.log('fired2')
  }

  const handleRndmProfile = () => {
    setCurProfile(Math.floor(Math.random() * 30))
  }

  return (
    <div className='App'>
      {profiles.length > 1 && <ProfileCards profiles={profiles} currentProfile={curProfile}/>}
      <div className="btnContainer">
      <PrevButton onClickHandler={handlePrevProfile}/>
      <GetRandomButton onClickHandler={handleRndmProfile}/>
      <NextButton onClickHandler={handleNextProfile}/>
      </div>
    </div>
  );
}

export default App;
