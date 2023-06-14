import "./processforce.jsx.css";
import Footer from "../UI/footer";
import Button from "../UI/button";

const ProcessForce = () => {
  return (
    <div className="content">
      <div className="heading-cry">
        <h1>Computec ProcessForce</h1>
        <p>
          Magento’s intuitive administration interface allows you to tailor your
          site to your unique business needs. Completely scalable and backed by
          an extensive support network, it is the ultimate eCommerce solution.
        </p>
      </div>
      <div className="process-body">
        <div className="process-body_top">
          <p>
            R3 Consulting LTD partnered with Computec ProcessForce to help
            growing manufacturing companies improve their standard of
            operations. We saw the need to equip small & mid-sized companies,
            especially in Nigeria with the tools necessary to run like the big
            companies do. Many small & mid-sized companies use a few
            disconnected applications to run their business. Computec offers
            advanced manufacturing solutions like;
          </p>
          <img
            src={require("../../images/static/magento_right.jpg")}
            alt="yolo"
          />
        </div>
        <div className="process-solu-wrapper">
          <div className="process-solu">
            <h2>Process Force</h2>
            <p>
              Building on SAP Business One’s powerful capabilities for key
              business functions CompuTec ProcessForce focuses on the areas that
              matter most to advanced manufacturers. It adds scores of
              functionalities for inventory management, product data, production
              process management, quality control, and complaint management as
              well as enhancing SAP Business One’s existing features in cost
              accounting, reporting and workflow management, and more. Some of
              its features include;
            </p>
            <ul>
              <li>Product Data Management</li>
              <li>Bill of Materials</li>
              <li>Product Routings</li>
              <li>Manufacturing Orders</li>
              <li>Full Batch Control and Traceability</li>
              <li>Quality Control</li>
              <li>Ingredient Declaration</li>
              <li>Product Costing </li>
              <li>Complaint Management</li>
            </ul>
          </div>
          <div className="process-solu">
            <h2>Warehouse Management Solution</h2>
            <p>
              Optimize your warehouse management practices no matter how many,
              how large or how complex your warehouses are.
            </p>
            <ul>
              <li>Organize and control logistics processes</li>
              <li>System support for all logistics documents</li>
              <li>Wide scope for supporting the production process</li>
              <li>Batch and serial numbers support</li>
              <li>Handling and storage unit management</li>
              <li>Stock counting</li>
              <li>Customizable interface</li>
              <li>User-defineded fields</li>
              <li>Design and manage task queues and workflow</li>
              <li>Full weight scales integration</li>
              <li>
                Data input via GS1 barcodes and touchscreen handheld devices
              </li>
            </ul>
          </div>
          <div className="process-solu">
            <h2>Plant Data Capture</h2>
            <p>
              Supervise your machine park, control your production resources,
              and track production flow in real-time all from your production
              line.
            </p>
            <ul>
              <li>Support the manufacturing process via production panels</li>
              <li>Manage production tasks and resources</li>
              <li>Control inventory movements during the production process</li>
              <li>Extensive manufacturing order data management options</li>
              <li>Record manufacturing order times</li>
              <li>Monitor resource status</li>
              <li>Control and register downtime</li>
              <li>Assign employees to specific scheduled tasks</li>
              <li>Customize the visible interface for each individual user</li>
            </ul>
          </div>
          <div className="process-solu">
            <h2>Label Printing Management</h2>
            <p>
              Manage all your printing templates and label printers from one
              location and make sure your products are labelled exactly the way
              you want them to be.
            </p>
            <ul>
              <li>Print from multiple databases</li>
              <li>Extensive configuration options</li>
              <li>Support for Crystal Reports and native printer languages</li>
              <li>
                Print directly from non-standard documents e.g. Master Data
              </li>
              <li>Manage printing rules</li>
              <li>Preview and print sample labels</li>
              <li>Email reporting</li>
            </ul>
          </div>
        </div>
        <Button />
      </div>
      <Footer />
    </div>
  );
};

export default ProcessForce;
