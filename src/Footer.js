import React from "react";
const Footer = () => (
  <div>
    <footer className="text-center">
      <p>
        <div>
          <h4>
            <strong style={{ marginLeft: "15px", color: "red" }}>
              LineID : @nongnai ใส่เครื่องหมาย @ ด้วยนะคะ
            </strong>
          </h4>
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
                gap: "10px",
              }}
            >
              <img
                src="/facebook.png"
                alt="เพิ่มเพื่อน"
                width={30}
                height={30}
              />
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
      </p>
    </footer>
  </div>
);

export default Footer;
