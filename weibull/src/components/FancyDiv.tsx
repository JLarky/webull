import React from 'react'
import ReactGA from "react-ga";

if (typeof window === "object") {
  ReactGA.initialize("UA-5041583-10");
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log(ReactGA);
}

const FancyDiv: React.FC = ({ children }) => {
  return <div style={{ border: '1px solid red' }}>{children}</div>
}
export default FancyDiv
