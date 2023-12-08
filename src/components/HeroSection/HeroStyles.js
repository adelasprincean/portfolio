import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

export const StyledHeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
export const StyledHeroBg = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;
export const StyledHeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const StyledHeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const StyledHeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;
export const StyledImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.bg};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;
export const StyledTitle = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.white};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;
export const StyledTextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.white};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;
export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
`;
export const StyledSubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.white + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const StyledResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white}; /* Ensure theme.white is defined */
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.4s ease-in-out; /* Move transition here */

  background: ${({ theme }) => theme.gradient};
  background: linear-gradient(
    225deg,
    hsla(318, 100%, 17%, 1) 0%,
    hsla(51, 100%, 82%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(318, 100%, 17%, 1) 0%,
    hsla(51, 100%, 82%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(318, 100%, 17%, 1) 0%,
    hsla(51, 100%, 82%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;

  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

export const StyledOuterContainer = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
`;

// Create a styled div for the inner container
export const StyledInnerContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 1.5rem;
  border: 2px solid ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2px;
`;

// Create a styled motion.div for the arrow-down icon
export const StyledArrowDownIcon = styled(FaArrowDown)`
  font-size: 15px; // Adjust the size as needed
  color: ${({ theme }) => theme.white}; // Change the color as needed
`;
