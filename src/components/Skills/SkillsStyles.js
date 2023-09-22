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
`;

export const StyledWaveSvg = styled(WaveSvg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  & svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 56px;
    transform: rotateY(180deg);
  }

  .shape-fill {
    fill: rgb(25 25 36);
  }

  @media screen and (max-width: 640px) {
    top: -1px;
  }
`;

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
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

export const StyledDesc = styled(motion.p)`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.white + 99};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledSkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

export const StyledSkill = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  border: 0.1px solid #58003d;
  box-shadow: rgba(230, 23, 85, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

export const StyledSkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledSkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

export const StyledSkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.bg};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const StyledSkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;
