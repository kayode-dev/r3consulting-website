import "./home.jsx.css";
import carosuel1 from "../images/background/carou.jpg";
import carousel2 from "../images/background/pexels-sergey-katyshkin-7011445.jpg";
import Footer from "./UI/footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="hero">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active " data-bs-interval="1000">
                <img
                  src={require("../images/background/carou.jpg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="1000">
                <img
                  src={require("../images/background/pexels-sergey-katyshkin-7011445.jpg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="hero-text">
            <div className="text left">
              <small>ABOUT US</small>
              <p>
                We provide software solutions that bring ease to your business
                process
              </p>
            </div>
            <div className="text right">
              <p>
                R3 Consulting provides business enterprise software solutions
                that meet our customers business process needs. We deliver a
                complete IT solution that combines people, systems, and
                technology in a new way that will help companies who are trying
                to find innovative ways of doing business to replace old,
                outdated ones.
              </p>
              <p>
                We understand our customers business domain and provide SAP
                solutions as the most comprehensive business platform to meet
                their core business needs while also having a strong focus on
                industries and strategic business software needs.
              </p>
              <Link to="about">
                <button>READ MORE</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="focus-sect">
          <h2>OUR INDUSTRY FOCUS</h2>
          <div className="focuses">
            <div className="focus">
              <h3>Manufacturing</h3>
              <span className="material-symbols-outlined"> arrow_forward </span>
            </div>
            <div className="focus">
              <h3>Energy, Oil & Gas</h3>
              <span className="material-symbols-outlined"> arrow_forward </span>
            </div>
            <div className="focus">
              <h3>Retail</h3>
              <span className="material-symbols-outlined"> arrow_forward </span>
            </div>
            <div className="focus">
              <h3>Public Sector</h3>
              <span className="material-symbols-outlined"> arrow_forward </span>
            </div>
            <div className="focus">
              <h3>Wholesale Distribution</h3>
              <span className="material-symbols-outlined"> arrow_forward </span>
            </div>
            <div className="focus">
              <h3>Real Estate Management</h3>
              <span className="material-symbols-outlined"> arrow_forward </span>
            </div>
            <div className="focus">
              <h3>Engineering, Construstion, and Operations</h3>
              <span className="material-symbols-outlined"> arrow_forward </span>
            </div>
            <div className="focus">
              <h3>Cargo, Transportation & Logistcs</h3>
              <span className="material-symbols-outlined"> arrow_forward </span>
            </div>
          </div>
        </div>
        <div className="partners">
          <h2>Our Partners</h2>
          <div className="logos">
            <img src={require("../images/logos/SAP-Logo.png")} alt="" />
            <img src={require("../images/logos/Microsoft-logo.png")} alt="" />
            <img src={require("../images/logos/processforce.jpg")} alt="" />
          </div>
        </div>
        <div className="clients">
          <h2>Our clients</h2>
          <div className="clientele">
            <div className="slider-track">
              <div className="slide">
                <img
                  src={require("../images/logos/aipec.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/elevation.webp")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/emzor.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/geoplex.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/HA.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/nett.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/quilox.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/slot.webp")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/vorian.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/westgate.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/aipec.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src="../images/logos/elevation.webp"
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/emzor.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/geoplex.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/HA.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/nett.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/quilox.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/slot.webp")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/vorian.png")}
                  alt=""
                  width="150px"
                />
              </div>
              <div className="slide">
                <img
                  src={require("../images/logos/westgate.png")}
                  alt=""
                  width="150px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ceo">
          <div className="text">
            <small>OUR TEAM</small>
            <h2>
              Meet Our CEO. <br />
              <b>GIDEON MAKINWA</b>
            </h2>
            <p>
              R3 Consulting LTD was founded in 2017 by the CEO, Gideon Makinwa.
              We saw the need to equip small & mid-sized companies especially in
              Nigeria with the tools necessary to run like the big companies do.
              Many small & mid-sized companies use a few disconnected
              applications to run their business.
            </p>
            <p>
              These solutions cannot deliver a unified view of the business.
              They force business executives to spend more time on operational
              details. They do not provide the strategic insights that lead to
              solid decision making. What’s more, managing multiple locations,
              whether around the corner or across the globe, and currencies
              conversion for these disparate solutions is often manual,
              laborious, and subject to error.
            </p>
            <Link to="team">
              <button onclick="location.href='team.html'">READ MORE</button>
            </Link>
          </div>
          <div className="image">
            <img src={require("../images/people/CEO.jpg")} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
