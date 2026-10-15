import {
  PageContainer,
  Hero,
  HeroContent,
  Eyebrow,
  Title,
  Subtitle,
  Tags,
  Tag,
  ProjectsContainer,
  ProjectCard,
  ProjectContent,
  ProjectLabel,
  ProjectTitle,
  ProjectDescription,
  ProjectMeta,
  MetaBox,
  ProjectTags,
  ProjectLink,
  ContactSection,
  ContactButton,
  BackLink,
} from "./ShopifyStyles";

const ShopifyPortfolio = () => {
  return (
    <PageContainer>
      <Hero>
        <HeroContent>
          <BackLink to="/">
            ← Back to portfolio
          </BackLink>

          <Eyebrow>Shopify Portfolio</Eyebrow>

          <Title>
            Custom Shopify work built for real ecommerce needs.
          </Title>

          <Subtitle>
            Selected projects covering Liquid, JavaScript, API integrations,
            theme customisation, product functionality, CRO and ongoing
            ecommerce development.
          </Subtitle>

          <Tags>
            <Tag>Shopify</Tag>
            <Tag>Liquid</Tag>
            <Tag>JavaScript</Tag>
            <Tag>REST APIs</Tag>
            <Tag>Metafields</Tag>
            <Tag>CRO</Tag>
            <Tag>SEO</Tag>
            <Tag>Klaviyo</Tag>
          </Tags>
        </HeroContent>
      </Hero>

      <ProjectsContainer>
        <ProjectCard>
          <ProjectContent>
            <ProjectLabel>
              01 · Custom Shopify Feature
            </ProjectLabel>

            <ProjectTitle>
              API-Driven Events Calendar
            </ProjectTitle>

            <ProjectDescription>
              Built a custom events experience inside Shopify that retrieves
              availability from an API and presents it in a responsive,
              searchable interface.
            </ProjectDescription>

            <ProjectMeta>
              <MetaBox>
                <strong>Challenge</strong>
                Present changing event data clearly inside the storefront.
              </MetaBox>

              <MetaBox>
                <strong>Solution</strong>
                Dynamic API loading, month filtering, search and responsive
                event cards.
              </MetaBox>
            </ProjectMeta>

            <ProjectTags>
              <Tag>Liquid</Tag>
              <Tag>JavaScript</Tag>
              <Tag>REST API</Tag>
              <Tag>CSS</Tag>
            </ProjectTags>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectContent>
            <ProjectLabel>
              02 · Product Functionality
            </ProjectLabel>

            <ProjectTitle>
              Pre-Order & Back-in-Stock System
            </ProjectTitle>

            <ProjectDescription>
              Custom Shopify functionality for pre-orders and sold-out
              products without relying on a dedicated pre-order app.
            </ProjectDescription>

            <ProjectMeta>
              <MetaBox>
                <strong>Included</strong>
                Product-level controls, dispatch dates and customer email
                capture.
              </MetaBox>

              <MetaBox>
                <strong>Integration</strong>
                Shopify metafields and Klaviyo capture/segmentation.
              </MetaBox>
            </ProjectMeta>

            <ProjectTags>
              <Tag>Liquid</Tag>
              <Tag>JavaScript</Tag>
              <Tag>Metafields</Tag>
              <Tag>Klaviyo</Tag>
            </ProjectTags>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectContent>
            <ProjectLabel>
              03 · Ongoing Ecommerce Development
            </ProjectLabel>

            <ProjectTitle>
              Everyman Driving Experiences
            </ProjectTitle>

            <ProjectDescription>
              Ongoing Shopify development across a large UK ecommerce
              storefront including custom functionality, responsive
              improvements and CRO work.
            </ProjectDescription>

            <ProjectTags>
              <Tag>Shopify</Tag>
              <Tag>Liquid</Tag>
              <Tag>JavaScript</Tag>
              <Tag>CRO</Tag>
            </ProjectTags>

            <ProjectLink
              href="https://everymandrivingexperiences.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live site ↗
            </ProjectLink>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
        <ProjectContent>
            <ProjectLabel>
            04 · Luxury Automotive Ecommerce
            </ProjectLabel>

            <ProjectTitle>
            AuroraGT
            </ProjectTitle>

            <ProjectDescription>
            Shopify development for a premium automotive business combining
            supercar sales, specialist servicing, vehicle enquiries and
            ecommerce functionality within one storefront.
            </ProjectDescription>

            <ProjectMeta>
            <MetaBox>
                <strong>Challenge</strong>
                Present luxury vehicle stock, services and consultation journeys
                within a polished ecommerce experience.
            </MetaBox>

            <MetaBox>
                <strong>Focus</strong>
                Shopify theme customisation, responsive UI, service/product
                presentation and enquiry-focused customer journeys.
            </MetaBox>
            </ProjectMeta>

            <ProjectTags>
            <Tag>Shopify</Tag>
            <Tag>Liquid</Tag>
            <Tag>JavaScript</Tag>
            <Tag>Responsive UI</Tag>
            <Tag>Ecommerce UX</Tag>
            </ProjectTags>

            <ProjectLink
            href="https://www.auroragt.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Visit live site ↗
            </ProjectLink>
        </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectContent>
            <ProjectLabel>
              05 · Theme Development
            </ProjectLabel>

            <ProjectTitle>
              All Star Driving Experiences
            </ProjectTitle>

            <ProjectDescription>
              Shopify theme customisation and ongoing front-end development,
              including responsive UI and ecommerce functionality.
            </ProjectDescription>

            <ProjectTags>
              <Tag>Shopify</Tag>
              <Tag>Liquid</Tag>
              <Tag>JavaScript</Tag>
              <Tag>Responsive UI</Tag>
            </ProjectTags>

            <ProjectLink
              href="https://www.allstardrivingexperience.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live site ↗
            </ProjectLink>
          </ProjectContent>
        </ProjectCard>
      </ProjectsContainer>

      <ContactSection>
        <Eyebrow>Freelance Shopify Support</Eyebrow>

        <ProjectTitle>
            Need extra Shopify support?
        </ProjectTitle>

        <ProjectDescription>
           I'm available for part-time and freelance Shopify work, from ongoing
                ecommerce support to custom Liquid, JavaScript and CRO improvements.
        </ProjectDescription>

        <ContactButton href="mailto:asprincean77@gmail.com">
          Start a project → 
        </ContactButton>
      </ContactSection>
    </PageContainer>
  );
};

export default ShopifyPortfolio;