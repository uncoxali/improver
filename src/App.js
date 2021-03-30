import React, { useEffect, useRef } from "react";
import FullScrollPage from "./FullScrollPage";
import "./index.css";

const App = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    // document.addEventListener('DOMContentLoaded', function () {
    var s = new FullScrollPage(1, 3, elementRef.current);
    s.init();
  }, []);

  return (
    <div className="fullscreen-container">
      <div ref={elementRef} id="all-pages">
        <section className="page">
          <div className="text-container">
            <h2>The first page</h2>
            <p>
              Try: Scroll the page; Click the white dots on the right side;
              Resize the window; View it on a mobile browser.
            </p>
          </div>
        </section>
        <section className="page">
          <div className="text-container">
            <h2>The second page</h2>
            <p>
              Try: Scroll the page; Click the white dots on the right side;
              Resize the window; View it on a mobile browser.
            </p>
          </div>
        </section>
        <section className="page">
          <div className="text-container">
            <h2>The third page</h2>
            <p>
              Try: Scroll the page; Click the white dots on the right side;
              Resize the window; View it on a mobile browser.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
