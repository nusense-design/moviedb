import React from "react";
import "../style/Navbar.scss";

const MovieNavbar = (props) => {
  // Open and Close Navbar Menu
   const menuBtn = document.querySelector(".menu-icon span");
   const searchBtn = document.querySelector(".search-icon");
   const cancelBtn = document.querySelector(".cancel-icon");
   const items = document.querySelector(".nav-items");
   const form = document.querySelector("form");
   menuBtn.onclick = () => {
     items.classList.add("active");
     menuBtn.classList.add("hide");
     searchBtn.classList.add("hide");
     cancelBtn.classList.add("show");
   };
   cancelBtn.onclick = () => {
     items.classList.remove("active");
     menuBtn.classList.remove("hide");
     searchBtn.classList.remove("hide");
     cancelBtn.classList.remove("show");
     form.classList.remove("active");
     cancelBtn.style.color = "#ff3d00";
   };
   searchBtn.onclick = () => {
     form.classList.add("active");
     searchBtn.classList.add("hide");
     cancelBtn.classList.add("show");
   };
  return (
    <div className="movie-navbar">
        <nav>
         <div class="menu-icon">
            <span class="fas fa-bars"></span>
         </div>
         <div class="logo">
            CodingNepal
         </div>
         <div class="nav-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
         </div>
         <div class="search-icon">
            <span class="fas fa-search"></span>
         </div>
         <div class="cancel-icon">
            <span class="fas fa-times"></span>
         </div>
         <form action="#">
            <input type="search" class="search-data" placeholder="Search" required/>
            <button type="submit" class="fas fa-search"></button>
         </form>
      </nav>
    </div>
  );
};

export default MovieNavbar;
