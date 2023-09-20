import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import LogoIcon from "../../assets/LogoIcon";

export const StyledNav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const StyledNavContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const StyledNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: self-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  color: ${({ theme }) => theme.white};
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const StyledLogoIcon = styled(LogoIcon)`
  display: flex;
`;

export const StyledSpan = styled.span`
  padding: 0 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const StyledMobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
  }
`;

export const StyledNavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledNavLink = styled.a`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  position: relative; /* Add relative positioning */
  transition: color 0.2s ease-in-out; /* Only transition color property */

  &:before {
    content: "";
    position: absolute;
    bottom: -3px; /* Adjust the distance of the line from the text */
    left: 0;
    width: 0; /* Start with no width */
    height: 2px; /* Adjust the line thickness */
    background-color: ${({ theme }) => theme.text_primary};
    transition: width 0.2s ease-in-out; /* Transition the width property */
  }

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    &:before {
      width: 100%; /* Expand the line to full width on hover */
    }
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const StyledGithubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.text_primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.bg};
    border: 1.8px solid ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const StyledMobileLink = styled(LinkR)`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;
