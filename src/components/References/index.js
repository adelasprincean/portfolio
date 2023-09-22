import { useState } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import {
  StyledContainer,
  StyledWrapper,
  StyledTitle,
  StyledDesc,
  StyledCardContainer,
  StyledArrowsWrapper,
  StyledButtonArrow,
} from "./ReferencesStyles";
import ReferenceCard from "../Cards/ReferenceCard";
import { references } from "../../data/constants";
import { textVariant } from "../../utils/motion";

const References = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = references[activeIndex];

  function handleNext() {
    setActiveIndex((oldIndex) => (oldIndex + 1) % references.length);
  }

  function handlePrev() {
    setActiveIndex((oldIndex) =>
      oldIndex === 0 ? references.length - 1 : oldIndex - 1
    );
  }

  return (
    <StyledContainer id="References">
      <StyledWrapper>
        <StyledTitle variants={textVariant()}>References</StyledTitle>
        <StyledDesc variants={textVariant()}>
          See what others have to say about working with me.
        </StyledDesc>
        <StyledCardContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
          }}
        >
          <SwitchTransition mode="out-in">
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <ReferenceCard
                name={activeSlide.name}
                role={activeSlide.role}
                description={activeSlide.description}
              />
            </CSSTransition>
          </SwitchTransition>
        </StyledCardContainer>
        <StyledArrowsWrapper>
          <StyledButtonArrow
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </StyledButtonArrow>
          <StyledButtonArrow
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </StyledButtonArrow>
        </StyledArrowsWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default References;
