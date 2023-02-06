import React from "react";
import { useState, useEffect, Component } from "react";
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div className="pier-nav pier-nav--dark">
            <div className="pier-nav__tab pier-nav__tab--dark">
                <button className="pier-button-icon pier-button-icon--xs pier-button-icon--secondary"><i className="pier-button-icon__icon fas fa-chevron-left"></i></button>
            </div>
            <h3 className="pier-heading pier-heading--sm">
                Navigation
            </h3>
            <div className="pier-nav__item-group">
                <div className="pier-nav__item-container">
                    <span className="pier-nav__item-dropdown-toggle
                            pier-nav__item-dropdown-toggle--toggled"></span>
                    <div className="pier-nav__item">
                        <span className="pier-nav__item-icon fas fa-ruler-triangle"></span>Business Rules
                    </div>
                    <div className="pier-nav__item-dropdown">
                        <NavLink to="/custom-creatives">
                            <div className="pier-nav__sub-item">
                                <div className="pier-nav__sub-item-line"></div>
                                Custom Creative Guidelines
                            </div>
                        </NavLink>
                        <NavLink to="/creative-rules">
                            <div className="pier-nav__sub-item">
                                <div className="pier-nav__sub-item-line"></div>
                                Creative Rules
                            </div>
                        </NavLink>
                        <NavLink to="/rate-card">
                            <div className="pier-nav__sub-item">
                                <div className="pier-nav__sub-item-line"></div>
                                Rate Card
                            </div>
                        </NavLink>
                        <NavLink to="/studies">
                            <div className="pier-nav__sub-item">
                                <div className="pier-nav__sub-item-line"></div>
                                Research & Data
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="pier-nav__item-container">
                    <NavLink to="/generator">
                        <div className="pier-nav__item">
                            <span className="pier-nav__item-icon fas fa-cog"></span>
                            SLA Generator
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default Nav;