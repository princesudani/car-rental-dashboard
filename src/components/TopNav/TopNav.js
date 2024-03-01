import React from "react";
import "./top-nav.css";
import { Link } from "react-router-dom";
import ProfileImg from "../../assets/images/profile-02.png";

const TopNav = () => {
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder="Search or Type" />
          <span>
            <i className="ri-search-line"></i>
          </span>
        </div>

        <div className="top__nav-right">
          <span className="notification">
            <i className="ri-notification-3-line"></i>
            <span className="badge">1</span>
          </span>

          <div className="profile">
            <Link to="/settings">
              <img src={ProfileImg} alt="profile Img" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
