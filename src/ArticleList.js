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
      {articles.map((article, key) => (
        <Link
          className="btn btn-outline-danger rounded border border-white p-3 col-6 col-md-4 uk-animation-slide-top"
          key={key}
          to={`/article/${article.name}`}
        >
          <img className="img-fluid rounded" src={article.img} />

          <div style={{ marginTop: "20px" }}>{article.title}</div>
        </Link>
      ))}
    </div>
  </div>
);

export default ArticleList;
