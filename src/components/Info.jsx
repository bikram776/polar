import "./info.css";

function Info() {
  return (
    <div>
      <div className="info-container">
        <div className="top-info">
          <p>Explore the Outdoors</p>
          <h1>Discover new Trails and connect with fellow Hikers</h1>
          <p>
            Find everything you need to enhance your hiking experience on our
            website
          </p>
        </div>
        <div className="bottom-info">
          <div className="trail sec">
            <h3>Trail Maps</h3>
            <p>Access detailed trail maps for popular hiking destinations</p>
            <a href="#">Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className="hiking sec">
            <h3>Hiking Tips</h3>
            <p>Access detailed trail maps for popular hiking destinations</p>
            <a href="#">Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className="forum sec">
            <h3>Community Forums</h3>
            <p>Access detailed trail maps for popular hiking destinations</p>
            <a href="#">Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
