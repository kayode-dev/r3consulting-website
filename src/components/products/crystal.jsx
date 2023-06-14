import "./crystal.jsx.css";
import Footer from "../UI/footer";
import Button from "../UI/button";
const Crystal = () => {
  return (
    <div class="content">
      <div class="heading-cry">
        <h1>SAP Crystal Report</h1>
        <p>
          SAP Crystal Reports is a popular Windows-based report writer solution
          that allows a developer to create reports and dashboards from a
          variety of data sources with a minimum of code to write. Crystal
          Reports is owned by SAP.
        </p>
      </div>
      <div class="crystal-body">
        <div class="crystal-top">
          <p>
            SAP Crystal Reports is a popular Windows-based report writer
            solution that allows a developer to create reports and dashboards
            from a variety of data sources with a minimum of code to write.
            Crystal Reports is owned by SAP.
          </p>
          <p>
            As a business intelligence application for individual users or small
            and medium-size enterprises (SMEs), SAP Crystal Reports 2020 is
            designed to work with databases to help users analyze and interpret
            important information. While users can create simple reports, the
            software also offers comprehensive tools needed to produce complex
            or specialized reports.
          </p>
        </div>
        <div class="crystal-btm">
          <h2>Key Benefits</h2>
          <ul>
            <li>Flexible and customized report</li>
            <li>Powerful report delivery options</li>
            <li>Data source connectivity</li>
            <li>Expanded support for Excel</li>
            <li>Windows operating system compatibility</li>
            <li>Mobile compatibility</li>
          </ul>
        </div>
        <Button />
      </div>

      <Footer />
    </div>
  );
};

export default Crystal;
