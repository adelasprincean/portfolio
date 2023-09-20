import { useState } from "react";
import { useTheme } from "styled-components";
import { FaBars } from "react-icons/fa";
import {
  StyledNav,
  StyledNavContainer,
  StyledNavLogo,
  StyledLogoIcon,
  StyledSpan,
  StyledMobileIcon,
  StyledNavItems,
  StyledNavLink,
  StyledButtonContainer,
  StyledGithubButton,
  StyledMobileMenu,
  StyledMobileLink,
} from "./NavbarStyles";
import { Bio } from "../../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  // Define links for nav
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNav>
      <StyledNavContainer>
        <StyledNavLogo to="/">
          <StyledLogoIcon /> <StyledSpan>Portfolio</StyledSpan>
        </StyledNavLogo>
        <StyledMobileIcon>
          <FaBars onClick={toggleMenu} />
        </StyledMobileIcon>
        <StyledNavItems>
          {navLinks.map((link) => (
            <StyledNavLink
              key={link.href}
              className="nav-item"
              href={link.href}
            >
              {link.label}
            </StyledNavLink>
          ))}
        </StyledNavItems>
        <StyledButtonContainer>
          <StyledGithubButton href={Bio.github} target="_blank">
            Github Profile
          </StyledGithubButton>
        </StyledButtonContainer>
      </StyledNavContainer>
      {isOpen && (
        <StyledMobileMenu isOpen={isOpen}>
          {navLinks.map((link) => (
            <StyledMobileLink
              key={link.label}
              href={link.href}
              onClick={toggleMenu}
            >
              {link.label}
            </StyledMobileLink>
          ))}
          <StyledGithubButton
            style={{
              padding: "10px 16px",
              background: `${theme.bg}`,
              border: "none",
              color: "white",
              width: "max-content",
            }}
            href={Bio.github}
            target="_blank"
          >
            Github Profile
          </StyledGithubButton>
        </StyledMobileMenu>
      )}
    </StyledNav>
  );
};

export default Navbar;
