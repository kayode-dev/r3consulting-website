import "./request.jsx.css";
import Footer from "./UI/footer";
const Request = () => {
  return (
    <div className="content">
      <div className="headinnnn">
        <h1>Request Demo</h1>
      </div>
      <div className="request-body">
        <div className="form-wrapp">
          <form>
            <div className="demo-text">
              <p>
                <strong>R3 Consulting Limited</strong> will show you the exact
                demo that will benefit your company. All of our products are
                mobile responsive, simple to use, and tailored to your specific
                business requirements.
              </p>

              <p>Take your first steps in SAP ERP World!</p>
              <p>
                Fill out the form below to request a demo. We will respond to
                your request as soon as possible.
              </p>
            </div>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label>Email Address</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your Phone Number" />
            </div>
            <div>
              <label>Select Your Industry</label>
              <select>
                <option selected disabled>
                  Select Industry
                </option>
                <option>Manufacturing</option>
                <option>Energy, Oil & Gas</option>
                <option>Retail</option>
                <option>Public Sector</option>
                <option>Wholeslae Distribution</option>
                <option>Banking & Finance</option>
                <option>Telecommunications</option>
                <option>Travel, Transport and Logistics </option>
                <option>Others</option>
              </select>
            </div>
            <div className="button-holder">
              <button>Request Demo</button>
            </div>
          </form>
        </div>
        <div className="img-wrapper"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Request;
