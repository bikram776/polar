import "./story.css";
import camping from "../assets/camping.jpg";
import camp1 from "../assets/camp1.jpg";
import camp2 from "../assets/camp2.jpg";
import camp3 from "../assets/camp3.jpg";
import { useState, useEffect } from "react";

function Story() {
  const storyData = [
    {
      activity: "Camping",
      image: camping,
      desc: `Climate change is beginning to have a devastating impact on
              forests across the world`,
      place: ["Uttarakhand", "Nainital"],
    },
    {
      activity: "Hiking",
      image: camp1,
      desc: `Climate change is beginning to have a devastating impact on
              forests across the world`,
      place: ["Uttarakhand", "Nainital"],
    },
    {
      activity: "Trail",
      image: camp2,
      desc: `Climate change is beginning to have a devastating impact on
              forests across the world`,
      place: ["Uttarakhand", "Nainital"],
    },
    {
      activity: "Rafting",
      image: camp3,
      desc: `Climate change is beginning to have a devastating impact on
              forests across the world`,
      place: ["Uttarakhand", "Nainital"],
    },
  ];

  const [currentIndx, setCurrentIdx] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});;

  function handlePrev() {
    setCurrentIdx((prevIndx) =>
      prevIndx === 0 ? storyData.length - 1 : prevIndx - 1
    );
  }

  function handleNext() {
    setCurrentIdx((prevIndx) =>
      prevIndx === storyData.length - 1 ? 0 : prevIndx + 1
    );
  }
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // useEffect with setInterval: The useEffect hook sets up an interval that calls the handleNext function every 3 seconds. This ensures that the story card automatically moves to the next one.

    return () => clearInterval(interval); // Cleanup: The return function within useEffect clears the interval when the component is unmounted or when the currentIndex changes, preventing memory leaks.
  }, [currentIndx]);

  useEffect(() => {
    const loadImage = async (index) => {
      const img = new Image();
      img.src = storyData[index].image;
      img.onload = () => {
        setImageLoaded((prevImageLoaded) => ({ ...prevImageLoaded, [index]: true }));
      };
    };

    loadImage(currentIndx);
  }, [currentIndx]);

  return (
    <div>
      <div className="story-container">
        {storyData.map(
          (story, index) =>
            index === currentIndx && (
              <div className="story-card" key={index}>
                <h4>{story.activity}</h4>
                <div className="img-contain">
                  {imageLoaded[index] ? (<img alt="scene" src={story.image} title="picture"  />) : (<div className="image-placeholder">Loading...</div>)}
                  
                </div>
                <div className="story-text">
                  <p>{story.desc}</p>
                  <div className="place">
                    <p className="p1">{story.place[0]}</p>
                    <p>{story.place[1]}</p>
                  </div>
                </div>
              </div>
            )
        )}
        <div className="icons">
          <i class="fa-solid fa-angle-left" onClick={handlePrev}></i>
          <i class="fa-solid fa-angle-right" onClick={handleNext}></i>
        </div>
      </div>
    </div>
  );
}

export default Story;
