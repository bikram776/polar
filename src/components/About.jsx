import "../components/about.css";
import Emp1 from "../assets/employee.png";

function About() {
  return (
    <div>
      <h1 className="head">About</h1>
      <div className="text-img">
        <div className="text">
          <h1>Explore the Great Outdoors with Our team</h1>
          <p>
            At Polar, we are passionate about hiking and exploring nature. Join
            us on our journey to discover the best hiking trails and gear for
            your next adventure.
          </p>
        </div>
        <div className="pics">
          <div>
            <img className="img1" alt="img" src={Emp1} />{" "}
            <img className="img2" alt="img" src={Emp1} />
          </div>
          
          <div>
            <img className="img3" alt="img" src={Emp1} />{" "}
            <img className="img4" alt="img" src={Emp1} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default About;
