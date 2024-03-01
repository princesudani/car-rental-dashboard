import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./sidebar.css";
import Logout from "../../pages/Logout";

const Sidebar = () => {
  const [loading, setLoading] = useState(false);

  function handleLogoutClick() {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <NavLink to="/dashboard">
          <h2>
            <span>
              <i className="ri-taxi-line"></i>
            </span>
            UberX
          </h2>
        </NavLink>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom">
          {loading && <Logout />}
          <NavLink
            to="/logout"
            element={<Logout />}
            className={(navClass) =>
              navClass.isActive ? "nav__active nav__link" : "nav__link"
            }
            onClick={handleLogoutClick}
          >
            <span>
              <i className="ri-logout-circle-r-line "></i>Logout
            </span>
          </NavLink>

          {/* <NavLink
            to="/logout" 
            className={(navClass) =>
              navClass.isActive ? "nav__active nav__link" : "nav__link"
            }
          >
            <span
            >
              <i className="ri-logout-circle-r-line "></i>Logout
            </span>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
