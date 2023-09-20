import {
  StyledFooterContainer,
  StyledFooterWrapper,
  StyledLogo,
  StyledNav,
  StyledNavLink,
  StyledSocialMediaIcons,
  StyledSocialMediaIcon,
  StyledCopyright,
} from "./FooterStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constants";

function Footer() {
  // Define links for nav
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
  ];

  return (
    <StyledFooterContainer>
      <StyledFooterWrapper>
        <StyledLogo>Adela Sprincean</StyledLogo>
        <StyledNav>
          {navLinks.map((link) => (
            <StyledNavLink
              key={link.href}
              className="nav-item"
              href={link.href}
            >
              {link.label}
            </StyledNavLink>
          ))}
        </StyledNav>
        <StyledSocialMediaIcons>
          <StyledSocialMediaIcon href={Bio.facebook} target="display">
            <FacebookIcon />
          </StyledSocialMediaIcon>
          <StyledSocialMediaIcon href={Bio.twitter} target="display">
            <TwitterIcon />
          </StyledSocialMediaIcon>
          <StyledSocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </StyledSocialMediaIcon>
          <StyledSocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </StyledSocialMediaIcon>
        </StyledSocialMediaIcons>
        <StyledCopyright>
          &copy; 2023 Adela Sprincean. All rights reserved.
        </StyledCopyright>
      </StyledFooterWrapper>
    </StyledFooterContainer>
  );
}

export default Footer;
