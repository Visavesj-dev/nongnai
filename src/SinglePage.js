import React from "react";
import ArticleContent from "./ArticleContent";
import { Helmet } from "react-helmet";
const SinglePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find((article) => article.name === name);

  return (
    <div style={{ margin: "auto" }}>
      <Helmet>
        <title>ยารักษาหนองใน ตกขาว หูด เริม</title>
        <meta content="ยารักษาหนองใน ตกขาว  หูด เริม" name=" description" />
      </Helmet>
      <div className="row">
        <div className="col-12 col-md-12 p-3 p-md-5">
          <div className="shadow rounded p-3 p-md-5 uk-animation-slide-right">
            <img
              className="img-fluid"
              src={`/${article.img}`}
              width={500}
              height={500}
            />
            <h1>
              <strong>
                <a href="/" className="text-danger">
                  {article.title}
                </a>
              </strong>
            </h1>
            <h3>{article.desc}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
