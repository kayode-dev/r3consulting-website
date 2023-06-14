import "./blog.jsx.css";
import Footer from "./UI/footer";

const Blog = () => {
  return (
    <div className="content">
      <div className="headinn">
        <h1>Blog</h1>
      </div>
      <div className="blogPosts">
        <div className="posts">
          <div className="post">
            <img src={require("../images/static/mission.jpg")} alt="imsage" />
            <div className="postTxt">
              <h2 className="postTitle">
                5 Reasons why your company should invest in SAP ERP solution
              </h2>
              <p className="postSub">
                Are you thinking of investing in SAP ERP software? It’s
                definitely not an easy decision to make. But is it worth it? The
                answer is YES. An SAP ERP solution can be a major asset for a
                company. For example, it can make your business......
              </p>
            </div>
          </div>
          <div className="post">
            <img
              src={require("../images/static/mission.jpg")}
              height="300px"
              alt="imsage"
            />
            <div className="postTxt">
              <h2 className="postTitle">
                5 Reasons why your company should invest in SAP ERP solution
              </h2>
              <p className="postSub">
                Are you thinking of investing in SAP ERP software? It’s
                definitely not an easy decision to make. But is it worth it? The
                answer is YES. An SAP ERP solution can be a major asset for a
                company. For example, it can make your business......
              </p>
            </div>
          </div>
          <div className="post">
            <img
              src={require("../images/static/mission.jpg")}
              height="300px"
              alt="imsage"
            />
            <div className="postTxt">
              <h2 className="postTitle">
                5 Reasons why your company should invest in SAP ERP solution
              </h2>
              <p className="postSub">
                Are you thinking of investing in SAP ERP software? It’s
                definitely not an easy decision to make. But is it worth it? The
                answer is YES. An SAP ERP solution can be a major asset for a
                company. For example, it can make your business......
              </p>
            </div>
          </div>
          <div className="post">
            <img
              src={require("../images/static/mission.jpg")}
              height="300px"
              alt="imsage"
            />
            <div className="postTxt">
              <h2 className="postTitle">
                5 Reasons why your company should invest in SAP ERP solution
              </h2>
              <p className="postSub">
                Are you thinking of investing in SAP ERP software? It’s
                definitely not an easy decision to make. But is it worth it? The
                answer is YES. An SAP ERP solution can be a major asset for a
                company. For example, it can make your business......
              </p>
            </div>
          </div>
          <div className="post">
            <img
              src={require("../images/static/mission.jpg")}
              height="300px"
              alt="imsage"
            />
            <div className="postTxt">
              <h2 className="postTitle">
                5 Reasons why your company should invest in SAP ERP solution
              </h2>
              <p className="postSub">
                Are you thinking of investing in SAP ERP software? It’s
                definitely not an easy decision to make. But is it worth it? The
                answer is YES. An SAP ERP solution can be a major asset for a
                company. For example, it can make your business......
              </p>
            </div>
          </div>
          <div className="post">
            <img
              src={require("../images/static/mission.jpg")}
              height="300px"
              alt="imsage"
            />
            <div className="postTxt">
              <h2 className="postTitle">
                5 Reasons why your company should invest in SAP ERP solution
              </h2>
              <p className="postSub">
                Are you thinking of investing in SAP ERP software? It’s
                definitely not an easy decision to make. But is it worth it? The
                answer is YES. An SAP ERP solution can be a major asset for a
                company. For example, it can make your business......
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
