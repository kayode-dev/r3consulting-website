import "./coo.jsx.css";
import Footer from "../UI/footer";
import Button from "../UI/button";

const COO = () => {
  return (
    <div class="content">
      <div class="heading-coo">
        <h1>SAP Customer Checkout</h1>
        <p>
          Get all your retail software solutions from a single vendor that is
          trusted and reliable. You don’t have to worry about managing multiple
          software vendors licenses, software updates and breaking changes in
          APIs.
        </p>
      </div>
      <div class="cco-body">
        <div class="cco-top">
          <div class="cco-top-text">
            <p>
              Retail Point of Solution technology is no longer used simply to
              make straightforward payments. SAP Customer Checkout helps you
              adapt to the demands of the fast-moving retail, entertainment, and
              food and beverage sectors by taking advantage of new business
              opportunities in an agile manner. The solution supports all common
              POS requirements from sales, payments, discounts, to loyalty
              management to streamline their processes and can be used as
              standalone solution or integrate with SAP ERP software for more
              options. The application also provides sophisticated tools to help
              you manage employees effectively and maintain personalized
              customer communications in compliance with data privacy
              regulations.
            </p>
          </div>
          <div class="cco-features">
            <h3>Features</h3>
            <div class="cco-feat-list">
              <div class="cco-feat">
                Hardware-agnostic solution offering rich functionality that can
                be easily extended
              </div>
              <div class="cco-feat">
                Intuitive user interfaces optimized for retail, quick service,
                and table service business scenarios
              </div>
              <div class="cco-feat">
                Standalone or linkage to other locations through straightforward
                integration with an ERP system
              </div>
              <div class="cco-feat">
                Management tools that provide visibility into POS processes.
              </div>
              <div class="cco-feat">
                Offline mode for continuity of operations even without an
                Internet connection
              </div>
              <div class="cco-feat">
                Real-time financial, inventory and payment data integration with
                back-office system
              </div>
              <div class="cco-feat">Master data management</div>
            </div>
          </div>
        </div>
        <div class="cco-middle">
          <img src={require("../../images/static/ccoimg.jpg")} alt="" />
          <div class="cco-text">
            <h2>Value to Customers</h2>
            <p>
              <span class="material-symbols-rounded"> arrow_circle_right </span>
              Capture sales and payment data in real time. Even better eliminate
              lack of Point of Sales transactions interface with your financial
              system. In most cases, connecting the two systems come at
              additional costs and software development time and many times
              these integrations don’t work. Take advantage of our out-of-box
              and powerful integration connect your Point of Sales with
              financial and inventory systems.
            </p>
            <p>
              <span class="material-symbols-rounded"> arrow_circle_right </span>
              When internet networks are down sales don’t have to stop. SAP
              Customer Checkout make it possible to sell offline and synchronize
              once internet is available. Our solution does this better than any
              other integration connector.
            </p>
            <p>
              <span class="material-symbols-rounded"> arrow_circle_right </span>
              If your multiple retail stores work independent and you worry
              about connecting all your stores operations to head office
              financial and inventory systems at reasonable costs without the
              additional costs of multiple server deployments then SAP Customer
              Checkout is the right solution for you.
            </p>
            <p>
              <span class="material-symbols-rounded"> arrow_circle_right </span>
              Get all your retail software solutions from a single vendor that
              is trusted and reliable. You don’t have to worry about managing
              multiple software vendors licenses, software updates and breaking
              changes in APIs.
            </p>
          </div>
        </div>
        <div class="cco-btm">
          <h2>Key Benefits</h2>
          <ul>
            <li>More efficient and flexible POS operations</li>
            <li>Improved support for informed decision-making</li>
            <li>Reduced IT complexity and cost</li>
            <li>Online and offline sales support</li>
          </ul>
        </div>
        <Button />
      </div>
      <Footer />
    </div>
  );
};

export default COO;
