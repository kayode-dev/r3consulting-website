import "./about.jsx.css";
import Footer from "./UI/footer";
const About = () => {
  return (
    <>
      <div className="containerrr">
        <div className="content-wrapper">
          <div className="contentt">
            <div className="overview">
              <div className="text">
                <h2>Company Overview</h2>
                <p>
                  R3 Consulting LTD was founded in 2017 by the CEO, Gideon
                  Makinwa. R3 Consulting provides business enterprise software
                  solutions that meet our customers’ business process needs. We
                  deliver a complete IT solution that combines people, systems,
                  and technology in a new way that will help companies who are
                  trying to find innovative ways of doing business to replace
                  old, outdated ones.
                </p>
                <p>
                  We understand our customers’ business domain and provide SAP
                  solutions as the most comprehensive business platform to meet
                  their core business needs while also having a strong focus on
                  industries and strategic business software needs.
                </p>
                <p>
                  We offer a wide portfolio of products and services covering
                  enterprise ERP software, consulting, implementation, custom
                  development, and support across SAP Business One, SAP Business
                  ByDesign, and SAP Customer Checkout.
                </p>
              </div>
            </div>
            <div className="mission-vision">
              <div className="vision">
                <div className="heading">
                  <small>our vision</small>
                </div>
                <div className="text">
                  To enhance the business operations of private, public and
                  government corporations by developing and implementing premium
                  and innovative software solutions to help our clients run
                  better and truly become global competitors
                </div>
              </div>
              <div className="mission">
                <div className="heading">
                  <small>our mission</small>
                </div>
                <div className="text">
                  To be the leading information technology and software
                  development firm in Africa by deploying the best solutions to
                  top tier domestic and international corporations
                </div>
              </div>
            </div>
            <div className="cores">
              <h2>Our Core Values</h2>
              <div className="core-list">
                <div className="core integrity">
                  <div className="text">
                    <h2>integrity</h2>
                    <p>We keep our integrity and promises and say the truth</p>
                  </div>
                </div>
                <div className="core excellence">
                  <div className="text">
                    <h2>excellence</h2>
                    <p>
                      We continually strive to be the best in everything we do
                    </p>
                  </div>
                </div>
                <div className="core accountability">
                  <div className="text">
                    <h2>accountability</h2>
                    <p>
                      We are accountable for our actions and their consequences
                    </p>
                  </div>
                </div>
                <div className="core service">
                  <div className="text">
                    <h2>service</h2>
                    <p>we put our customers first and serve them diligently</p>
                  </div>
                </div>
                <div className="core commitment">
                  <div className="text">
                    <h2>commitment</h2>
                    <p>
                      We remain committed to innovations, our purpose &
                      corporate objectives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default About;
