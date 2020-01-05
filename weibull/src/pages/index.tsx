import React from "react";

export default () => (
  <div className="text-center">
    <h1 className="m-3 text-3xl font-bold">Weibull vs Robinhood</h1>
    <p className="m-4">
      Webull is commission free online brokerage that competes with Robinhood.
      Unfortunatelly for them it's hard to hear name of the company right. Is it
      Weibull? Weble? Webel? Vible? VeyBol? Webull? Weeble?
    </p>
    <p className="m-4">
      But you found this page, so at least you did something right :) If you
      want to learn more consider reading{" "}
      <a className="hover:underline text-blue-400" href="https://www.investingsimple.com/webull-vs-robinhood/">
        this article
      </a>{" "}
      or watch this video
    </p>
    <p className="m-4 flex justify-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Lm_BUdiqS5M"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </p>
    <p className="m-4">
      <a
        href="https://act.webull.com/invitation/us/share.html"
        type="button"
        className="block-button bg-blue-700 w-full p-3 font-bold text-white"
      >
        Go to WeBull.com
      </a>
    </p>
    <p className="m-4">
      If you like to say thanks to me please consider clicking on the button
      above to start investing and get TWO free stocks.
    </p>
  </div>
);
