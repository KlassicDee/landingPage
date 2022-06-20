import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Nav.css";
// import  Dropdown from 'react-bootstrap/Dropdown';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_logo">
        <h3>AR SHAKIR</h3>
      </div>
      <nav>
        <ul className="nav_left">
          {/* <li>
            <Link to="/">
              <DropdownButton id="dropdown-basic-button" title="Product">
                <Dropdown.Item href="#/action-1">Products</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Delivery</Dropdown.Item>
              </DropdownButton>
            </Link>
          </li>
          <li>
            <Link to="/">
              <DropdownButton id="dropdown-basic-button" title="Template">
                <Dropdown.Item href="#/action-1">Demo</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Patterns</Dropdown.Item>
              </DropdownButton>
            </Link>
 */}

          <li>
            <Link to="/">Products</Link>
          </li>

          <li>
            <Link to="/">Template</Link>
          </li>

          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">Pricing</Link>
          </li>
        </ul>
      </nav>
      <div className="nav_right ">
        <a href="#">Sign In</a>
        <a href="#">
          <button className="nav_btn">Start Free</button>
        </a>
      </div>
    </div>
  );
};

export default Nav;
