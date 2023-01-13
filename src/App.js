import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import "./style/Movie.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
   const [type, setType] = useState("popular");
 
    const [queryInput, setQueryInput] = useState("");

      const [searchResult, setSearchResult] = useState("");

  return (
    <>
      <Router>
        <Navbar
          type={type}
          setType={setType}
          setQueryInput={setQueryInput}
          queryInput={queryInput}
          setSearchResult={setSearchResult}
          searchResult={searchResult}
        />
        <Routes>
          <Route
            path="/details"
            element={<Details />}
            type={type}
            setType={setType}
          />
          
          <Route
            path="/"
            element={
              <Home
                type={type}
                setType={setType}
                setQueryInput={setQueryInput}
                queryInput={queryInput}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
