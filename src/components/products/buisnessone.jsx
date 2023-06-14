import "./buisnessone.jsx.css";
import Footer from "../UI/footer";
import Button from "../UI/button";
const BusinessOne = () => {
  return (
    <div class="content">
      <div class="heading-b_one">
        <h1>SAP Business One</h1>
        <p>
          Built from the scratch and supported by a trusted, innovative, and
          reliable software vendor. For over 40 years SAP is the most reliable
          software partner. You don’t have to worry about continue supports and
          innovation.
        </p>
      </div>
      <div class="bone-body">
        <div class="bone-top">
          <div class="bone-top-text">
            <p>
              SAP Business One is an affordable, easy-to-use business management
              solution designed specifically for growing small to midsized
              businesses (SMEs and MSME). It will interest you to know that SAP
              Business One is not a scaled-down version of the larger SAP
              products. From financials and accounting to inventory and customer
              relationship management (CRM), all your key business areas are
              integrated to provide clear visibility into your entire business.
              By capturing data into a single centralized location, you can
              access critical real time information to make fast, informed
              decisions. Trusted around the world, SAP Business One is a
              scalable, proven solution available on premise and in the cloud.
              It has the functionality to help you transform your business by
              leveraging information to maximize efficiency, reach new customers
              and drive profitable growth.
            </p>
            <p>
              Gain greater control over your business or subsidiary with SAP
              Business One. Streamline key processes, gain greater insight into
              your business, and make decisions based on real-time information –
              so you can drive profitable growth.
            </p>
          </div>
          <div class="bone-features">
            <h3>Features</h3>
            <div class="bone-feature-list">
              <div class="bone-feature">
                <h3>Financial Management</h3>
                <p>
                  Improve margins, reduce errors, and drive more profitable
                  decision-making with a complete set of tools for streamlined
                  financial operations.
                </p>
              </div>
              <div class="bone-feature">
                <h3>Sales & Customer Management</h3>
                <p>
                  Oversee the entire sales process and customer lifecycle more
                  efficiently – from initial contact to final sale, after-sales
                  service, and support.
                </p>
              </div>
              <div class="bone-feature">
                <h3>Inventory & Multiple Warehouse Management</h3>
                <p>
                  Get real time inventory position and value and manage multiple
                  warehouse locations. Manage batch numbers, serial numbers, bin
                  locations and bar code with our simple but comprehensive
                  inventory module.
                </p>
              </div>
              <div class="bone-feature">
                <h3>Business Intelligence</h3>
                <p>
                  Create timely and accurate reports based on company-wide data
                  with analytics and reporting tools.
                </p>
              </div>
              <div class="bone-feature">
                <h3>Analytics and Reporting</h3>
                <p>
                  Access information faster and evaluate it with powerful
                  analytics in real time.
                </p>
              </div>
              <div class="bone-feature">
                <h3>Industry-Specific Capabilities</h3>
                <p>
                  Take advantage of extensive industry-specific functionalities,
                  best practices, and processes with tools designed for small
                  and midsize businesses like the manufacturing, wholesale
                  distribution and retail, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bone-middle">
          <img src={require("../../images/static/sapb1.jpg")} alt="" />
          <div class="bone-text">
            <h2>Value to Customer</h2>
            <p>
              <span class="material-symbols-rounded"> arrow_circle_right </span>
              Built from the scratch and supported by a trusted, innovative, and
              reliable software vendor. For over 40 years SAP is the most
              reliable software partner. You don’t have to worry about continue
              supports and innovation.
            </p>
            <p>
              <span class="material-symbols-rounded"> arrow_circle_right </span>
              Connect all your business processes in a single solution. Get
              clear visibility into your entire business and gain complete
              control over every aspect of your operations. It captures all
              critical business information for immediate access and use
              company-wide. Unlike traditional accounting packages and
              spreadsheets, it delivers what you need to manage your key
              business areas.
            </p>
            <p>
              <span class="material-symbols-rounded"> arrow_circle_right </span>
              Extend to meet your specific business needs. integrate your other
              software with our modern APIs.
            </p>
          </div>
        </div>
        <div class="bone-btm">
          <h2>Key Benefits</h2>
          <ul>
            <li>Improved Cost-Efficiency</li>
            <li>Better Collaboration Throughout Business</li>
            <li>
              Design Intuitive, Interactive dashboards and reports that answer
              your most pressing questions.
            </li>
            <li>Improved data security</li>
            <li>
              Accurately track revenues, costs, and cash flow to assess
              performance and take swift corrective action.
            </li>
            <li>
              Access information faster and evaluate it with powerful analytics
              in real time.
            </li>
          </ul>
        </div>
        <Button />
      </div>
      <Footer />
    </div>
  );
};

export default BusinessOne;
