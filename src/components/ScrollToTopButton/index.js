import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

// Create a styled button for the arrow
const StyledArrowButton = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 1.5rem;
  border: 2px solid ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2px;
`;

const StyledArrowUpIcon = styled(FaArrowUp)`
  font-size: 15px;
  color: ${({ theme }) => theme.white};
`;

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const distanceToBottom = documentHeight - scrollPosition - windowHeight;

      if (distanceToBottom < 10) {
        // Show the arrow when close to the bottom
        setShowButton(true);
      } else {
        // Hide the arrow when not close to the bottom
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <StyledArrowButton onClick={scrollToTop}>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <StyledArrowUpIcon />
          </motion.div>
        </StyledArrowButton>
      )}
    </>
  );
};

export default ScrollToTop;
