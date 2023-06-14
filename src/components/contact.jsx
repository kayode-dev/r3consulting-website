import "./contact.jsx.css";
import Footer from "./UI/footer";

const Contact = () => {
  return (
    <div className="content">
      <div className="headinnn">
        <h1>Contact Us!</h1>
      </div>
      <div className="contact-body">
        <div className="form-wrap">
          <form>
            <h2>Send Us A Message</h2>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div>
              <label>Your Message</label>
              <textarea rows="10" placeholder="Enter your message" />
            </div>
            <div className="button-holder">
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className="contact-buttons">
          <div className="contact-button">
            <div>
              <span className="material-symbols-outlined">location_on</span>
              <h5>Address</h5>
            </div>
            <p>Trinity Mall, 79, Awolowo Way, Ikeja, Lagos, Nigeria</p>
          </div>
          <div className="contact-button">
            <div>
              <span className="material-symbols-outlined">phone_enabled</span>
              <h5>Telephone</h5>
            </div>
            <p>08099451647</p>
          </div>
          <div className="contact-button">
            <div>
              <span className="material-symbols-outlined">contact_mail</span>
              <h5>Email</h5>
            </div>
            <p>info@r3consultingltd.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
