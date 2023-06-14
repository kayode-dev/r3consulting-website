import Footer from "../UI/footer";
import "./magneto.jsx.css";
import Button from "../UI/button";

const Magneto = () => {
  return (
    <div className="content">
      <div className="headingg">
        <h1>Magento eCommerce</h1>
        <p>
          Magento’s intuitive administration interface allows you to tailor your
          site to your unique business needs. Completely scalable and backed by
          an extensive support network, it is the ultimate eCommerce solution.
        </p>
      </div>
      <div className="content-body">
        <div className="mag-top">
          <div className="mag-top-text">
            <p>
              Magento is a feature-rich eCommerce platform solution that offers
              merchants complete flexibility and control over the functionality
              of their online channel. Its search engine optimization, catalog
              management, and powerful marketing tools give merchants the
              ability to create sites that provide an unrivaled shopping
              experience for their customers.
            </p>
            <p>
              Magento’s intuitive administration interface allows you to tailor
              your site to your unique business needs. Completely scalable and
              backed by an extensive support network, it is the ultimate
              eCommerce solution.
            </p>
          </div>
          <div className="features">
            <h3>Features</h3>
            <ul>
              <li>Marketing, Promotions and Conversion Tools</li>
              <li>Site Management</li>
              <li>Search Engine Optimization</li>
              <li>Analytics and Reporting</li>
              <li>International Support</li>
              <li>Order Management</li>
              <li>Catalog Management and Browsing, etc.</li>
            </ul>
          </div>
        </div>
        <div className="mag-middle">
          <img src={require("../../images/static/sapmag.jpg")} alt="" />
          <div className="mag-text">
            <h2>Value to Customers</h2>
            <p>
              <span className="material-symbols-rounded">
                {" "}
                arrow_circle_right{" "}
              </span>
              Price change updates are synchronized directly from our SAP ERP in
              real-time. This help eliminate and remove needless time of your
              eCommerce team to manually update price change in Magento catalog
              hence they can concentrate on more value-driven tasks
            </p>
            <p>
              <span className="material-symbols-rounded">
                {" "}
                arrow_circle_right{" "}
              </span>
              Real time update of out-of-stock information is now available when
              you integrate Magento with SAP ERP. In most cases you’ll have the
              eCommerce team trying to update stock changes manually as indirect
              channel sales are not captured as part of online sales. This task
              is often tedious and time wasting.
            </p>
            <p>
              <span className="material-symbols-rounded">
                {" "}
                arrow_circle_right{" "}
              </span>
              Customer and Item Master Data Synchronization -SAP Integration Hub
              offers bi-directional flow of product and customer master data
              from SAP ERP to Magento without need for custom integration
              connector.
            </p>
            <p>
              <span className="material-symbols-rounded">
                {" "}
                arrow_circle_right{" "}
              </span>
              Omnichannel gives your online shoppers the flexibility to buy
              online and pick up in any offline physical store location of their
              choice
            </p>
            <p>
              <span className="material-symbols-rounded">
                {" "}
                arrow_circle_right{" "}
              </span>
              Back-office synchronization -All your online financial and
              inventory transactions are posted to back-office support software
              without manual help
            </p>
          </div>
        </div>
        <div className="mag-btm">
          <h2>Benefits of Magento Commerce and SAP integration</h2>
          <div className="benefits">
            <div className="benefit">
              <div className="benefit-head">
                <span className="material-symbols-outlined"> task_alt </span>
                <h3>Data sharing</h3>
              </div>
              <p>
                Critical data about customer interactions captured in Magento
                Commerce can be shared near-instantaneously with SAP ERP.
                Operational efficiency and accuracy are improved, and manual
                data entry is minimized. Nor do business systems designed and
                operated in SAP have to be mapped into Magento.
              </p>
            </div>
            <div className="benefit">
              <div className="benefit-head">
                <span className="material-symbols-outlined"> task_alt </span>
                <h3>Synchronization</h3>
              </div>
              <p>
                Your customers can receive a consistent, high-quality user
                experience across all your channels based on synchronized data.
                You can track product information all the way from design to
                delivery to create actionable insights for your business.
                Increase Productivity of your eCommerce Team – your team can now
                focus on more value driven activities which in turn boost your
                online sales
              </p>
            </div>
            <div className="benefit">
              <div className="benefit-head">
                <span className="material-symbols-outlined"> task_alt </span>
                <h3>Analytics</h3>
              </div>
              <p>
                Your ecommerce business can benefit from SAP Analytics Cloud and
                make intelligent use of data through machine learning, using SAP
                Business Intelligence, Enterprise Planning, and Predictive
                Analytics.
              </p>
            </div>
          </div>
        </div>
        <Button />
      </div>

      <Footer />
    </div>
  );
};

export default Magneto;
