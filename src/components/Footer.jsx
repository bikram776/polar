import "../components/footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="upper">
          <div>
            <h2>Polar</h2>
          </div>
          <div className="footer-links">
            <a href="#">Product Resources</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
          </div>
          <div className="socials">
            <a>
              <i class="fa-brands fa-square-x-twitter"></i>
            </a>
            <a>
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a>
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a>
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <hr />
        <div className="lower">
          <div className="lower-text">
            <p>Copyright 2022 Polar</p>
            <p>Rights Reserved by Polar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
