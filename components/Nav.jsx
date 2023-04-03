import React, { Fragment } from "react";
import { useState, useEffect, Component } from "react";
import { NavLink } from "react-router-dom";
import Image from "next/image";
import { Tag } from "pier-design-system";
import { Link } from "react-router-dom";

<<<<<<< HEAD
function Nav() {
=======
function Nav(props) {
  const [open, setOpen] = useState(true);
  const sidebarClass = props.isOpen ? "sidebar open" : "nav-section";

>>>>>>> 290fd06 (completed dmp table for data page)
  return (
    <div className="pier-nav pier-nav--dark">
      <div
        className="-d-flex -justify-content-center -m-b-4"
        style={{ width: "100%" }}
      >
<<<<<<< HEAD
        <Link to="/landing-page">
=======
        <Link to="/">
>>>>>>> 290fd06 (completed dmp table for data page)
          {" "}
          <Image
            alt="gumgum logo"
            src="/gumgum_logo_dark.svg"
            width="150%"
            height="100%"
            key="1"
            style={{ verticalAlign: "middle" }}
          />
        </Link>
      </div>
<<<<<<< HEAD
      <div className="pier-nav__tab pier-nav__tab--dark">
        <button className="pier-button-icon pier-button-icon--xs pier-button-icon--secondary">
          <i className="pier-button-icon__icon fas fa-chevron-left"></i>
        </button>
      </div>
      <div className="pier-nav__item-group">
        <div className="pier-nav__item-container">
          <span
            className="pier-nav__item-dropdown-toggle pier-nav__item-dropdown-toggle--dark
                            pier-nav__item-dropdown-toggle--toggled"
          ></span>
          <div className="pier-nav__item pier-nav__item--dark">
            <span className="pier-nav__item-icon fas fa-ruler-triangle"></span>
            Business Rules
          </div>
          <div className="pier-nav__item-dropdown">
            <NavLink to="/custom-creatives">
              <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                <div className="pier-nav__sub-item-line"></div>
                Custom Creative Guidelines
              </div>
            </NavLink>
            <NavLink to="/creative-rules">
              <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                <div className="pier-nav__sub-item-line"></div>
                Creative Rules
              </div>
            </NavLink>
            <NavLink to="/rates">
              <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                <div className="pier-nav__sub-item-line"></div>
                Rates
              </div>
            </NavLink>
            <NavLink to="/studies">
              <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                <div className="pier-nav__sub-item-line"></div>
                Research & Data
              </div>
            </NavLink>
          </div>
        </div>
        <div className="pier-nav__item-container">
          <NavLink to="/generator">
            <div className="pier-nav__item pier-nav__item--dark">
              <span className="pier-nav__item-icon fas fa-cog"></span>
              SLA Generator &nbsp;
              <Tag size="sm" theme="hero">
                Beta
              </Tag>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

=======
      {props.isOpen && (
        <Fragment>
          <div className="pier-nav__tab pier-nav__tab--dark">
            <button
              onClick={props.toggleSidebar}
              className="pier-button-icon pier-button-icon--xs pier-button-icon--secondary"
            >
              <i
                className="pier-button-icon__icon fas fa-chevron-left"
                style={{ transform: "rotate(180deg)" }}
              ></i>
            </button>
          </div>

          <div className="pier-nav__inner pier-nav__inner--collapsed">
            {" "}
            <div className="pier-nav__item-group">
              <div className="pier-nav__item-container">
                <span
                  className={
                    open
                      ? "pier-nav__item-dropdown-toggle pier-nav__item-dropdown-toggle--dark pier-nav__item-dropdown-toggle--toggled"
                      : "pier-nav__item-dropdown-toggle pier-nav__item-dropdown-toggle--dark pier-nav__item-dropdown-toggle"
                  }
                  onClick={() => setOpen(!open)}
                ></span>

                <div className="pier-nav__item pier-nav__item--dark">
                  <span className="pier-nav__item-icon fas fa-clipboard-check"></span>
                  Business Rules
                </div>
                <div className="pier-nav__item-dropdown">
                  <NavLink to="/rates">
                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                      <div className="pier-nav__sub-item-line"></div>
                      Rates
                    </div>
                  </NavLink>
                  <NavLink to="/creative-rules">
                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                      <div className="pier-nav__sub-item-line"></div>
                      Creative Rules
                    </div>
                  </NavLink>
                  <NavLink to="/custom-creatives">
                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                      <div className="pier-nav__sub-item-line"></div>
                      Custom Creative Guidelines
                    </div>
                  </NavLink>

                  <NavLink to="/studies">
                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                      <div className="pier-nav__sub-item-line"></div>
                      Research & Data
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="pier-nav__item-container">
                <NavLink to="/generator">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-cog"></span>
                    SLA Generator &nbsp;
                    <Tag size="sm" theme="hero">
                      Beta
                    </Tag>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </Fragment>
      )}

      {!props.isOpen && (
        <Fragment>
          <div className="pier-nav__tab pier-nav__tab--dark">
            <button
              onClick={props.toggleSidebar}
              className="pier-button-icon pier-button-icon--xs pier-button-icon--secondary"
            >
              <i
                className="pier-button-icon__icon fas fa-chevron-left"
                style={{ transform: "" }}
              ></i>
            </button>
          </div>

          <div className="pier-nav__inner">
            <div className="pier-nav__item-group">
              <div className="pier-nav__item-container">
                <span
                  className={
                    open
                      ? "pier-nav__item-dropdown-toggle pier-nav__item-dropdown-toggle--dark pier-nav__item-dropdown-toggle--toggled"
                      : "pier-nav__item-dropdown-toggle pier-nav__item-dropdown-toggle--dark pier-nav__item-dropdown-toggle"
                  }
                  onClick={() => setOpen(!open)}
                ></span>

                <div className="pier-nav__item pier-nav__item--dark">
                  <span className="pier-nav__item-icon fas fa-clipboard-check"></span>
                  Business Rules
                </div>
                <div className="pier-nav__item-dropdown">
                  <NavLink to="/rates">
                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                      <div className="pier-nav__sub-item-line"></div>
                      Rates
                    </div>
                  </NavLink>
                  <NavLink to="/creative-rules">
                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                      <div className="pier-nav__sub-item-line"></div>
                      Creative Rules
                    </div>
                  </NavLink>
                  <NavLink to="/custom-creatives">
                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                      <div className="pier-nav__sub-item-line"></div>
                      Custom Creative Guidelines
                    </div>
                  </NavLink>

                  <NavLink to="/studies">
                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                      <div className="pier-nav__sub-item-line"></div>
                      Research & Data
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="pier-nav__item-container">
                <NavLink to="/generator">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-cog"></span>
                    SLA Generator &nbsp;
                    <Tag size="sm" theme="hero">
                      Beta
                    </Tag>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

>>>>>>> 290fd06 (completed dmp table for data page)
export default Nav;
