import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Info from "./Info";
import Plans from "./Plans";
import SignupForm from "./SignupForm";
import Story from "./Story";

function Home() {
  const [showSignup, setShowSignup] = useState(false);
  const handleGetStarted = (event) => {
    event.preventDefault();
    setShowSignup(true);
  }; 

  return (
    <div>
      <Header onGetstarted={handleGetStarted}/>
      {showSignup && <SignupForm/>}
      <Info/>
      <Plans/>
      <Story/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home;