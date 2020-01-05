import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Link, Router } from "@reach/router";
import FancyDiv from "components/FancyDiv";
import Dynamic from "containers/Dynamic";
import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <Nav />
      <div className="p-4">
        <FancyDiv>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </FancyDiv>
      </div>
    </Root>
  );
}

function Nav() {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src={require("./WEBull.png")}
          className="fill-current h-8 w-8 mr-2"
        />
        <span className="font-semibold text-xl tracking-tight">Weibull</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          (open ? "block" : "hidden") +
          " w-full flex-grow lg:flex lg:items-center lg:w-auto"
        }
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default App;
