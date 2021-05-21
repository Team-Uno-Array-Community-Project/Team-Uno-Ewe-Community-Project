import React, { useEffect, useState } from "react";

import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Creates a scroll to top button, only visible with an event listener when scrolling down the bottom of the site //

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 180) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const smoothToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

// renders a back-to-top button positioned left in footer. It fades when hovered over with cursor.
  return (
    <div className="btt-arrow" style={{ position: "relative", zIndex: "2" }}>
      {isVisible && (
        <div onClick={smoothToTop}>
          <FontAwesomeIcon icon={faAngleDoubleUp} />
          <p className="back-to-top-text">back to top</p>
        </div>
      )}
    </div>
  );
}

export default BackToTop;
