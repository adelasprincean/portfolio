import { Fragment, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCardLink = styled(motion.div)`
  width: 650px;
  border: 0.1px solid #58003d;
  border-radius: 10px;
  box-shadow: rgba(230, 23, 85, 0.15) 0px 4px 24px;
  margin-top: 10px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: ${({ isOpen }) => (isOpen ? "11" : "10")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
`;

const StyledName = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.white + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledRole = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.white + 85};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const StyledCardDescription = styled(motion.p)`
  color: #ffffff;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "none" : "6em")};
`;

const StyledCardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
`;

const ReferenceCard = ({ name, description, role }) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);

  const toggleCard = () => {
    setIsCardOpened(!isCardOpened);
    if (!isCardOpened) {
      setCardDimensions({
        width: card.current.clientWidth,
        height: card.current.clientHeight,
      });
    }
  };

  return (
    <Fragment>
      <StyledCardLink
        ref={card}
        isCardOpened={isCardOpened}
        layout
        onClick={toggleCard}
      >
        <StyledCardDescription
          isOpen={isCardOpened}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {description}
        </StyledCardDescription>
        <StyledName isCardOpened={isCardOpened} layout="position">
          {name}
        </StyledName>
        <StyledRole isCardOpened={isCardOpened} layout="position">
          {role}
        </StyledRole>
      </StyledCardLink>
      {isCardOpened && (
        <StyledCardBackground
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsCardOpened(false)}
        >
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
              zIndex: "12",
              position: "absolute",
            }}
          />
        </StyledCardBackground>
      )}
    </Fragment>
  );
};

export default ReferenceCard;
