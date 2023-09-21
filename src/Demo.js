import React from "react";

const Demo = () => (
  <div
    style={{
      backgroundColor: "white",
      bottom: "0px",
      height: "auto",
      minHeight: "150px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    }}
  >
    <div style={{ width: "1000px" }}>
      <a
        href="https://www.facebook.com/media/set/?set=a.145814961677437&type=3"
        target="_blank"
        className="btn btn-success rounded-pill col-md-4 col-12 mb-2"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "30px", color: "white" }}>
            ดูรีวิวการรักษาเภสัช
          </span>
        </div>
      </a>
    </div>
  </div>
);

export default Demo;
