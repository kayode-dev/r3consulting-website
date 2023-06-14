import Footer from "./UI/footer";
import "./team.jsx.css";

const Team = () => {
  return (
    <>
      <div className="content">
        <div className="heading">
          <h1>Team</h1>
          <p>
            R3 Consulting is made up of a team of professionals that are
            experienced, committed, and enthusiastic.
          </p>
        </div>
        <div className="team-members">
          <div className="member">
            <img
              src={require("../images/people/Gideon_Makinwa-removebg-preview.jpg")}
              alt=""
            />
            <div className="text">
              <h2 className="name">Gideon Makinwa</h2>
              <p className="role">CEO/SOFTWARE ARCHITECT</p>
            </div>
          </div>
          <div className="member">
            <img
              src={require("../images/people/Rose-Makinwa-removebg-preview.jpg")}
              alt=""
            />
            <div className="text">
              <h2 className="name">Rose V. Makinwa</h2>
              <p className="role">EXECUTIVE DIRECTOR, & CONSULTANT</p>
            </div>
          </div>
          <div className="member">
            <img
              src={require("../images/people/Matthew_Abiodun-removebg-preview.jpg")}
              alt=""
            />
            <div className="text">
              <h2 className="name">Matthew I. Abiodun</h2>
              <p className="role">HEAD, SYSTEM INTEGRATION & SAP SUPPORT</p>
            </div>
          </div>
          <div className="member">
            <img
              src={require("../images/people/Omolana-Ogundipe-removebg-preview.jpg")}
              alt=""
            />
            <div className="text">
              <h2 className="name">Olamide Olanrewaju</h2>
              <p className="role">BUSINESS DEVELOPMENT MANAGER</p>
            </div>
          </div>
          <div className="member">
            <img
              src={require("../images/people/Seyitan_Oyinlade-removebg-preview.jpg")}
              alt=""
            />
            <div className="text">
              <h2 className="name">Seyitan Oyinlade</h2>
              <p className="role">SAP SUPPORT CONSULTANT</p>
            </div>
          </div>
          <div className="member">
            <img
              src={require("../images/people/Omolana-Ogundipe-removebg-preview.jpg")}
              alt=""
            />
            <div className="text">
              <h2 className="name">Omolana Ogundipe</h2>
              <p className="role">BUSINESS DEVELOPMENT SPECIALIST</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
