import { useState } from "react";
import { useTheme } from "styled-components";
import { FaBars, FaPhoneAlt } from "react-icons/fa";

import {
  StyledNav,
  StyledNavContainer,
  StyledNavLogo,
  StyledLogoIcon,
  StyledSpan,
  StyledMobileIcon,
  StyledMobileActions,
  StyledNavItems,
  StyledNavLink,
  StyledButtonContainer,
  StyledGithubButton,
  StyledMobileMenu,
  StyledMobileLink,
  StyledRouterLink,
  StyledMobileRouterLink,
  PhoneButton,
} from "./NavbarStyles";

import { Bio } from "../../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

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
          <StyledLogoIcon />
          <StyledSpan>Portfolio</StyledSpan>
        </StyledNavLogo>

        <StyledMobileActions>
          <PhoneButton
            href={`tel:${Bio.phone}`}
            aria-label="Call Adela"
            title="Call me"
          >
            <FaPhoneAlt />
          </PhoneButton>

          <StyledMobileIcon onClick={toggleMenu}>
            <FaBars />
          </StyledMobileIcon>
        </StyledMobileActions>

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

          <StyledRouterLink to="/shopify-portfolio">
            Shopify
          </StyledRouterLink>
        </StyledNavItems>

        <StyledButtonContainer>
          <PhoneButton
            href={`tel:${Bio.phone}`}
            aria-label="Call Adela"
            title="Call me"
          >
            <FaPhoneAlt />
          </PhoneButton>

          <StyledGithubButton
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
          >
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

          <StyledMobileRouterLink
            to="/shopify-portfolio"
            onClick={toggleMenu}
          >
            Shopify Portfolio
          </StyledMobileRouterLink>

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
            rel="noreferrer"
          >
            Github Profile
          </StyledGithubButton>
        </StyledMobileMenu>
      )}
    </StyledNav>
  );
};

export default Navbar;