import React from "react";

const Demo = () => (
  <div className="text-center" style={{ width: "100%", marginBottom: "10px" }}>
    <a
      href="https://www.facebook.com/ruksanongnai"
      target="_blank"
      className="btn btn-primary rounded-pill col-6 col-md-2"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "50px",
        }}
      >
        <img src="/facebook.png" alt="เพิ่มเพื่อน" width={30} height={30} />
        <span>FaceBook ปรึกษาพูดคุย</span>
      </div>
    </a>
    <a
      href="https://lin.ee/2iRmQPK"
      className="btn rounded-pill col-6 col-md-2"
    >
      <img
        src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"
        alt="เพิ่มเพื่อน"
      />
    </a>
  </div>
);

export default Demo;
