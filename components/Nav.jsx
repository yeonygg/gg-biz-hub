import React from "react";
import { useState, useEffect, Component } from "react";
import { NavLink } from "react-router-dom";
import Image from "next/image";
import { Tag } from "pier-design-system";

function Nav() {
  return (
    <div className="pier-nav pier-nav--dark">
      <div
        className="-d-flex -justify-content-center -m-b-4"
        style={{ width: "100%" }}
      >
        {" "}
        <Image
          alt="gumgum logo"
          src="/gumgum_logo_dark.svg"
          width="150%"
          height="100%"
          key="1"
          style={{ verticalAlign: "middle" }}
        />
      </div>
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

export default Nav;
