import React, { useDeferredValue, useEffect, useRef, useState } from "react";
import "../style/Navbar.scss";
import { FaAlignLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Navbar = (props) => {
  const inputEl = useRef(null);
   const navigate = useNavigate();
  const handleToggle = () => {
    inputEl.current.classList.toggle("block-div");
  };
  useEffect(() => {
    inputEl.current.classList.remove("block-div");
  }, [])
  
  return (
    <div className="nav">
      <div className="navbarWrapper">
        <div
          className="logo"
          onClick={() => navigate("/")}
        >
          MovieDb
        </div>
        <div className="hamMenu" onClick={handleToggle}>
          {" "}
          <FaAlignLeft />
        </div>
        <div>
          <ul className="navbar-content">
            <div className="nav">
              <a onClick={() => props?.setType("popular")}>Popular</a>
              <a onClick={() => props?.setType("upcoming")}>Upcoming</a>
              <a onClick={() => props?.setType("top_rated")}>Top-Rated</a>
            </div>
            <div className="search-wrapper">
              <input
                className="navbar-input"
                onChange={(e) => props?.setSearchResult(e?.target?.value)}
                type="search"
                name="movie name"
                placeholder="movie name"
                id=""
              />
              <button
                className="navbar-search-btn"
                onClick={() => props?.setQueryInput(props?.searchResult)}
              >
                search
              </button>
            </div>
          </ul>
        </div>
      </div>
      <div className="mobile-nav">
        <div ref={inputEl} className="mobile-menu">
          <a
            onClick={() => {
              handleToggle();
              props?.setType("popular");
            }}
          >
            Popular
          </a>
          <a
            onClick={() => {
              handleToggle();
              props?.setType("upcoming");
            }}
          >
            Upcoming
          </a>
          <a
            onClick={() => {
              handleToggle();
              props?.setType("top_rated");
            }}
          >
            Top-rated
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
