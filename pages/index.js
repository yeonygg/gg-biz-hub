import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
import Generator from "../components/Generator";
import Studies from "../components/Studies";
import CustomCreatives from "../components/CustomCreatives";
import CreativeBusinessRules from "../components/CreativeBusinessRules";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import { useState, useEffect, Component } from "react";
import UUIDV4 from "../helpers/helpers";
import { Fragment } from "react";
import AddStudyRow from "../components/AddStudyRow";

function App() {
  return (
    <Fragment>
      <Head>
        <title>GumGum SLA Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link hre="~/pier-design-system/dist/styles.css" />
      </Head>

      <BrowserRouter>
        <div className={styles.container}>
          <div className="nav-section">
            <Nav />
          </div>

          <div className="outer-content">
            <div className="inner-content">
              {" "}
              <Routes>
                <Route path="/generator" element={<Generator />} />
                <Route path="/studies" element={<Studies />} />
                <Route path="/custom-creatives" element={<CustomCreatives />} />
                <Route
                  path="/creative-rules"
                  element={<CreativeBusinessRules />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
