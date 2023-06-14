import "./cloud.jsx.css";
import Footer from "../UI/footer";
import Button from "../UI/button";

const Cloud = () => {
  return (
    <div className="content">
      <div className="headinggg">
        <h1>SAP Analytics Cloud</h1>
        <p>
          SAC is the only analytics solution which combines business
          intelligence, planning, predictive and augmented analytics in a single
          solution. Customers are assured of increased productivity and
          efficiency and getting value for their money.
        </p>
      </div>
      <div className="sac-body">
        <div className="sac-head">
          <div className="sac-head-text">
            <p>
              SAP Analytics Cloud is an analytic software which offers a fully
              comprehensive, cloud-based analytics solution that combines BI,
              planning and predictive capabilities. Smart data preparation, data
              discovery, planning, and predictive analysis capability are ideal
              for all industries and organizations.
            </p>
            <p>
              It allows every customer to create reports of varying complexity
              with total autonomy.
            </p>
          </div>
          <div className="sac-features">
            <h3>Features</h3>
            <ul className="mainlist">
              <li className="mainfeat">
                Business Intelligence (BI)
                <ul className="sublist">
                  <li className="subfeat">
                    <span className="material-symbols-rounded">
                      arrow_circle_right{" "}
                    </span>
                    Data Access
                  </li>
                  <li className="subfeat">
                    <span className="material-symbols-rounded">
                      arrow_circle_right{" "}
                    </span>
                    Data Modelling
                  </li>
                  <li className="subfeat">
                    <span className="material-symbols-rounded">
                      arrow_circle_right{" "}
                    </span>
                    Data Visualisation
                  </li>
                </ul>
              </li>
              <li className="mainfeat">
                Predictive and Augmented Analytics
                <ul className="sublist">
                  <li className="subfeat">
                    <span className="material-symbols-rounded">
                      arrow_circle_right{" "}
                    </span>
                    Search to Insight
                  </li>
                  <li className="subfeat">
                    <span className="material-symbols-rounded">
                      arrow_circle_right{" "}
                    </span>
                    Smart Discovery
                  </li>
                  <li className="subfeat">
                    <span className="material-symbols-rounded">
                      arrow_circle_right{" "}
                    </span>
                    Smart Insight
                  </li>
                  <li className="subfeat">
                    <span className="material-symbols-rounded">
                      arrow_circle_right{" "}
                    </span>
                    Smart Predict
                  </li>
                </ul>
              </li>
              <li className="mainfeat">
                Planning
                <ul className="sublist">
                  <li className="subfeat">
                    <span className="material-symbols-rounded">
                      arrow_circle_right{" "}
                    </span>
                    Forecast
                  </li>
                  <li className="subfeat">
                    <span className="material-symbols-rounded">
                      arrow_circle_right{" "}
                    </span>
                    Simulations
                  </li>
                  <li className="subfeat">
                    <span className="material-symbols-rounded">
                      arrow_circle_right{" "}
                    </span>
                    “What If” Scenarios
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="sac-middle">
          <img
            src={require("../../images/static/sapcloud.jpg")}
            alt=""
            height="500px"
          />
          <div className="sac-mid-text">
            <h2>Value to Customers</h2>
            <p>
              SAC is the only analytics solution which combines business
              intelligence, planning, predictive and augmented analytics in a
              single solution. Customers are assured of increased productivity
              and efficiency and getting value for their money.
            </p>
            <p>
              Through its forecast and simulations abilities, businesses know
              how to make adequate preparations drive sales.
            </p>
          </div>
        </div>
        <div className="sac-btm">
          <h2>Key Benefits of SAC</h2>
          <div className="sac-benefits">
            <div className="sac-benefit">
              <span className="material-symbols-outlined"> task_alt </span>
              Improved Business Planning
            </div>
            <div className="sac-benefit">
              <span className="material-symbols-outlined"> task_alt </span>
              Intellectual Forecasting
            </div>
            <div className="sac-benefit">
              <span className="material-symbols-outlined"> task_alt </span>Key
              Insights
            </div>
            <div className="sac-benefit">
              <span className="material-symbols-outlined"> task_alt </span>
              Higher Potential to make Right Decisions
            </div>
          </div>
        </div>
        <Button />
      </div>
      <Footer />
    </div>
  );
};

export default Cloud;
