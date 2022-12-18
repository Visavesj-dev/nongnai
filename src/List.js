import React from "react";
import ArticleContent from "./ArticleContent";
import ArticleList from "./ArticleList";
const List = () => (
  <div>
    <img src="landing.png" alt="landing" width={1000} />
    <ArticleList articles={ArticleContent} />
  </div>
);
export default List;
