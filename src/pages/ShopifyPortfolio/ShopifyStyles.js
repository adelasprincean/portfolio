import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 80px;

  background: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.white};
`;

export const Hero = styled.section`
  padding: 100px 24px 80px;
  background: linear-gradient(
    90deg,
    rgba(255, 241, 163, 0.79) 0%,
    rgba(88, 0, 61, 1) 95%
  );
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.text_primary};
`;

export const Title = styled.h1`
  max-width: 950px;
  font-size: clamp(42px, 7vw, 88px);
  line-height: 1.05;
  margin: 0;
`;

export const Subtitle = styled.p`
  max-width: 760px;
  margin-top: 26px;
  font-size: 19px;
  line-height: 1.7;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 34px;
`;

export const Tag = styled.span`
  padding: 7px 13px;
  border: 1px solid ${({ theme }) => theme.text_primary};
  border-radius: 20px;
  font-size: 13px;
`;

export const ProjectsContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 24px;
  display: grid;
  gap: 28px;
`;

export const ProjectCard = styled.article`
  background: ${({ theme }) => theme.card};
  border-radius: 24px;
  overflow: hidden;
`;

export const ProjectContent = styled.div`
  padding: 42px;

  @media screen and (max-width: 640px) {
    padding: 28px 22px;
  }
`;

export const ProjectLabel = styled.div`
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const ProjectTitle = styled.h2`
  font-size: clamp(28px, 4vw, 44px);
  margin: 0;
`;

export const ProjectDescription = styled.p`
  max-width: 800px;
  font-size: 17px;
  line-height: 1.7;
  opacity: 0.85;
  margin-top: 18px;
`;

export const ProjectMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 28px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const MetaBox = styled.div`
  padding: 18px;
  border-radius: 16px;
  background: ${({ theme }) => theme.card_light};

  strong {
    display: block;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 6px;
  }
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 24px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactSection = styled.section`
  max-width: 1150px;
  margin: 40px auto 0;
  padding: 52px 70px;
  border-radius: 28px;

  background: linear-gradient(
    90deg,
    rgba(255, 241, 163, 0.79) 0%,
    rgba(88, 0, 61, 1) 95%
  );

  @media screen and (max-width: 768px) {
    margin: 30px 20px 0;
    padding: 42px 32px;
  }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-top: 24px;
  padding: 12px 24px;

  border: 2px solid ${({ theme }) => theme.text_primary};
  border-radius: 22px;

  background: transparent;
  color: ${({ theme }) => theme.white};

  text-decoration: none;
  font-weight: 600;

  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.text_primary};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
  }
`;