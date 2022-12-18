import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <div>
    <Link to="/">
      <img width="120" className="img-fluid" src="/logo.jpeg" />
      <h4 className="text-danger" style={{ marginTop: "5px" }}>
        การรักษาหนองใน ตกขาว หูด เริม
      </h4>
    </Link>
    <a
      href="https://lin.ee/2iRmQPK"
      className="btn btn-danger rounded-pill btn-block"
    >
      อยากหาย คลิกตรงนี้
    </a>
  </div>
);

export default Nav;
