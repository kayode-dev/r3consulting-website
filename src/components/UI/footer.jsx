const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={require("../../images/logos/R3_Logo_Light.png")} alt="" />
      </div>
      <div className="social-links">
        <div className="social">
          <small>INSTAGRAM</small>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="social">
          <small>TWITTER</small>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="social">
          <small>facebook</small>
          <i className="fa-brands fa-facebook"></i>
        </div>
        <div className="social">
          <small>linkedin</small>
          <i className="fa-brands fa-linkedin"></i>
        </div>
        <div className="social">
          <small>E-MAIL</small>
          <i className="fa-solid fa-envelope"></i>
        </div>
        <div className="social phone">
          <small>PHONE</small>
          <small id="numm">+234-8099451647</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
