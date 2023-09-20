import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled.div`
  background: rgb(25, 25, 36);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const StyledTitle = styled(motion.div)`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin: 20px 0;
  color: ${({ theme }) => theme.white};
  @media (max-width: 768px) {
    margin: 12px 0;
    font-size: 32px;
  }
`;

export const StyledDesc = styled(motion.p)`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.white + 99};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;
