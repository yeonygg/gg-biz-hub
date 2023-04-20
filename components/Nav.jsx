import React, { Fragment } from "react";
import { useState, useEffect, Component } from "react";
import { NavLink } from "react-router-dom";
import Image from "next/image";
import { Tag } from "pier-design-system";
import { Link } from "react-router-dom";

function Nav(props) {
  const [open, setOpen] = useState(true);

  return (
    <div className="pier-nav pier-nav--dark">
      {props.isOpen && (
        <Fragment>
          <div
            className="-d-flex -justify-content-center -m-b-4"
            style={{ width: "100%", padding: "2rem 1rem 1rem 1rem" }}
          >
            <Link to="/">
              {" "}
              <Image
                alt="gumgum logo"
                src="/logo_only.svg"
                width="100%"
                height="100%"
                key="1"
                style={{ verticalAlign: "middle" }}
              />
            </Link>
          </div>

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

          <div className="pier-nav__inner">
            {" "}
            <div className="pier-nav__item-group">
              <div className="pier-nav__item-container">
                <NavLink to="/rates">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-file-invoice-dollar"></span>
                  </div>
                </NavLink>
              </div>

              <div className="pier-nav__item-container">
                <NavLink to="/creative-rules">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-pencil-ruler"></span>
                  </div>
                </NavLink>
              </div>

              <div className="pier-nav__item-container">
                <NavLink to="/custom-creatives">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-edit"></span>
                  </div>
                </NavLink>
              </div>

              <div className="pier-nav__item-container">
                <NavLink to="/studies">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-file-alt"></span>
                  </div>
                </NavLink>
              </div>

              <div className="pier-nav__item-container">
                <NavLink to="/generator">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-cog"></span>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </Fragment>
      )}

      {props.isMobile && (
        <Fragment>
          <div
            className="-d-flex -justify-content-center -m-b-4"
            style={{ width: "100%", padding: "2rem 1rem 1rem 1rem" }}
          >
            <Link to="/">
              {" "}
              <Image
                alt="gumgum logo"
                src="/logo_only.svg"
                width="100%"
                height="100%"
                key="1"
                style={{ verticalAlign: "middle" }}
              />
            </Link>
          </div>

          <div className="pier-nav__inner">
            {" "}
            <div className="pier-nav__item-group">
              <div className="pier-nav__item-container">
                <NavLink to="/rates">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-file-invoice-dollar"></span>
                  </div>
                </NavLink>
              </div>

              <div className="pier-nav__item-container">
                <NavLink to="/creative-rules">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-pencil-ruler"></span>
                  </div>
                </NavLink>
              </div>

              <div className="pier-nav__item-container">
                <NavLink to="/custom-creatives">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-edit"></span>
                  </div>
                </NavLink>
              </div>

              <div className="pier-nav__item-container">
                <NavLink to="/studies">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-file-alt"></span>
                  </div>
                </NavLink>
              </div>

              <div className="pier-nav__item-container">
                <NavLink to="/generator">
                  <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-cog"></span>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </Fragment>
      )}

      {!props.isOpen && (
        <Fragment>
          <div
            className="-d-flex -justify-content-center -m-b-4"
            style={{ width: "100%" }}
          >
            <Link to="/">
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

export default Nav;
