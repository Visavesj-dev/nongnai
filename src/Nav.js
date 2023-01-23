import React from "react";
import { Link } from "react-router-dom";
import { Flashing } from "./index.view";

const Nav = () => (
  <div style={{ marginTop: "50px" }}>
    <Link to="/">
      <img width="120" className="img-fluid" src="/logo.jpeg" />
      <h4 className="text-danger" style={{ marginTop: "5px" }}>
       ปรึกษากับเภสัชกรชำนาญการ
      </h4>
    </Link>
    <Flashing href="https://www.facebook.com/ruksanongnai">ปรึกษาพูดคุย คลิก!!</Flashing>
  </div>
);

export default Nav;
