import React, {useState, useEffect} from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showScrollToTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
          });
        }, []);

    const scrollToStart = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return(
        <div>
            {showScrollToTopButton && (<FaArrowCircleUp onClick={scrollToStart} className="top-btn-position top-btn-style"/>)}
        </div>
    );

}

export default ScrollToTop;