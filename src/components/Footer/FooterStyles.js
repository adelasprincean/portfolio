import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

export const StyledFooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

export const StyledLogo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

export const StyledNav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
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

export const StyledSocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const StyledSocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.white + 70};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const StyledCopyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.white + 70};
  text-align: center;
`;
