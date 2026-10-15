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
    transition: 0.8s all ease;
  }
`;

export const StyledNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  @media screen and (max-width: 768px) {
    width: auto;
    flex: 1;
  }

  @media screen and (max-width: 640px) {
    padding: 0;
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

export const StyledMobileActions = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: auto;
  }
`;

export const StyledMobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

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
  position: relative;
  transition: color 0.2s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.text_primary};
    transition: width 0.2s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.text_primary};

    &:before {
      width: 100%;
    }
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  width: 80%;
  height: 100%;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
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

  &:hover {
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
  top: 80px;
  left: 0;
  right: 0;

  width: 100%;
  padding: 20px 40px 24px;

  background: ${({ theme }) => theme.card_light};
  transition: all 0.3s ease-in-out;

  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(100%)"};

  border-radius: 0 0 20px 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const StyledMobileLink = styled.a`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const StyledRouterLink = styled(LinkR)`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.text_primary};
    transition: width 0.2s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.text_primary};

    &:before {
      width: 100%;
    }
  }
`;

export const StyledMobileRouterLink = styled(LinkR)`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const PhoneButton = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  background: ${({ theme }) => theme.text_primary};
  color: white;

  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  svg {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    width: 36px;
    height: 36px;

    svg {
      font-size: 15px;
    }
  }
`;