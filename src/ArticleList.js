import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => (
  <div style={{ marginTop: "20px", marginBottom: "100px" }}>
    <Helmet>
      <meta content="index, follow" name="robots" />
    </Helmet>
    <div></div>
    <div>
      <img className="img-fluid rounded" src="nongnai.png" width={700}/>
    </div>
  </div>
);

export default ArticleList;
