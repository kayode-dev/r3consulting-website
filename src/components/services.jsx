import "./services.jsx.css";
import Footer from "./UI/footer";

const Services = () => {
  return (
    <div className="content">
      <div className="headin">
        <h1>Services</h1>
        <p>
          We offer a wide portfolio of products and services covering enterprise
          ERP software, consulting, implementation, custom development, and
          support across SAP Business One, SAP Business ByDesign, and SAP
          Customer Checkout
        </p>
      </div>
      <div className="txtcontent">
        <div className="cntxt">
          <div className="top">
            <div className="text-top">
              <h2>
                R3 Consulting provides business enterprise software solutions
                that meet our customers’ business process needs.
              </h2>
              <p>
                We deliver a complete IT solution that combines people, systems
                and technology in a new way that will help companies who are
                trying to find innovative ways of doing business to replace old,
                outdated ones.
              </p>
              <p>
                We understand our customers’ business domain and provide SAP
                solutions as most comprehensive business platform to meet their
                core business needs while also having strong focus on industries
                and strategic business software needs. We offer a wide portfolio
                of products and services covering enterprise ERP software,
                consulting, implementation, custom development, and support.
              </p>
              <h3>
                Reach out to us for your SAP solution service requirements:
              </h3>
              <ul>
                <li>
                  Complete implementations of new solutions for small and
                  midsize enterprises
                </li>
                <li>
                  Post implementation, re-implementation or supporting
                  consulting services
                </li>
                <li>
                  Custom software development and additional software
                  functionality
                </li>
                <li>International rollouts of SAP solutions to subsidiaries</li>
                <li>
                  SDK development for SAP Business One and SAP Business
                  ByDesign.
                </li>
              </ul>
            </div>
            <img src={require("../images/static/Software.jpg")} alt="gewd" />
          </div>
          <div className="bottom">
            <img src={require("../images/static/why-sap.jpg")} />
            <div className="text">
              <h2>Why R3 Consulting for SAP Solutions and Services?</h2>
              <ul>
                <li>
                  <div className="head">
                    <span className="material-symbols-outlined">
                      {" "}
                      task_alt{" "}
                    </span>
                    <h3>A Strong Portfolio of Integrated Solutions.</h3>
                  </div>
                  <div className="con">
                    <p>
                      SAP’s ERP solutions contain integrated functionality for
                      financials, sales orders, purchasing, and operations.
                      There are also best-in-className operational add-on
                      products that expand the breadth and depth of the solution
                      for further capabilities.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="head">
                    <span className="material-symbols-outlined">
                      {" "}
                      task_alt{" "}
                    </span>
                    <h3>Software Project Success Commitment.</h3>
                  </div>
                  <div className="con">
                    <p>
                      We have in-depth technical knowledge of SAP software
                      deployment. We combine the expertise of our consultant and
                      understanding of clients’ business requirement to deliver
                      implementation projects in a timely manner. We adopt
                      software support approach that emphasis on users’ adoption
                      and adaptation of new SAP solution through users’
                      trainings, hand holding supports and coaching.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="head">
                    <span className="material-symbols-outlined">
                      {" "}
                      task_alt{" "}
                    </span>
                    <h3>A Clear Roadmap for Solutions.</h3>
                  </div>
                  <div className="con">
                    <p>
                      SAP is continually investing in their ERP solutions with a
                      solid roadmap on current, upcoming, and future features
                      and enhancements. A variety of local and worldwide events
                      are held where customers and users are invited to share
                      experiences and learn the latest news and updates.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="head">
                    <span className="material-symbols-outlined">
                      {" "}
                      task_alt{" "}
                    </span>
                    <h3>A Promise of Transparency.</h3>
                  </div>
                  <div className="con">
                    <p>
                      Through your ERP evaluation project, we want to provide
                      timely information on product, pricing, demonstrations,
                      and proposals so you can make a good decision on a
                      software investment. R3 Consulting has both local and
                      international clients. Talk to us to discover how SAP ERP
                      solutions will enable your company to optimize and
                      streamline your entire business.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
