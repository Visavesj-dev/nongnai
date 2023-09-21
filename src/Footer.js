import React from "react";
const Footer = () => (
  <div
    style={{
      position: "fixed",
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
        href="https://www.facebook.com/ruksanongnai"
        target="_blank"
        className="btn btn-primary rounded-pill col-md-6 col-12"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <img src="/facebook.png" alt="เพิ่มเพื่อน" width={30} height={30} />
          <span style={{ fontSize: "30px" }}>ติดต่อสอบถาม</span>
        </div>
      </a>
      <a
        href="https://lin.ee/2iRmQPK"
        className="btn rounded-pill  col-md-6 col-12"
      >
        <img
          src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"
          alt="เพิ่มเพื่อน"
        />
      </a>
      <a
        href="https://www.facebook.com/media/set/?set=a.145814961677437&type=3"
        target="_blank"
        className="btn btn-warning rounded-pill col-md-12 col-12 mb-2"
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

export default Footer;
