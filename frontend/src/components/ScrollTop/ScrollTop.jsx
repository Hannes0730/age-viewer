import React from "react";
import './ScrollTop.scss'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollArrow = () => {

  const scrollToTop = () => {
    const navbar = document.getElementById("top-nav");
    if (navbar) {
      navbar.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-arrow">
        <FontAwesomeIcon className="arrow-up" icon={faArrowUp} size="2x" onClick={scrollToTop}/>
    </div>
  );
};

export default ScrollArrow;