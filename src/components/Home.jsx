import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Info from "./Info";
import Plans from "./Plans";
import Story from "./Story";

function Home() {
  return (
    <div>
      <Header/>
      <Info/>
      <Plans/>
      <Story/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home;