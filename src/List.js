import React from "react";
import ArticleContent from "./ArticleContent";
import ArticleList from "./ArticleList";
const List = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img src="landing.png" alt="landing" width={1000} />
    <video width="320" height="240" controls>
      <source src="nongnai.mp4" type="video/mp4" />
    </video>
    <ArticleList articles={ArticleContent} />
  </div>
);
export default List;
