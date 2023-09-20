import styled from "styled-components";
import { motion } from "framer-motion";
import WaveSvg from "../../assets/svg/WaveSvg";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;
export const StyledWaveSvg = styled(WaveSvg)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  & svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 61px;
    transform: rotateY(180deg);
  }

  .shape-fill {
    fill: rgb(25 25 36);
  }
  @media screen and (max-width: 640px) {
    bottom: -1px;
  }
`;
export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const StyledTitle = styled(motion.span)`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.white};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
export const StyledDesc = styled(motion.div)`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.white + 99};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
export const StyledTimeLine = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
