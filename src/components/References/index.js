import { useState } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import {
  StyledContainer,
  StyledWrapper,
  StyledTitle,
  StyledDesc,
  StyledCardContainer,
  StyledInfo,
  StyledSpan,
  StyledName,
  StyledRole,
  StyledArrowsWrapper,
  StyledPrev,
  StyledNext,
} from "./ReferencesStyles";
import { references } from "../../data/constants";
import { textVariant } from "../../utils/motion";

const References = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = references[activeIndex];

  function handleNext() {
    if (activeIndex >= references.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(references.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  return (
    <StyledContainer id="References">
      <StyledWrapper>
        <StyledTitle variants={textVariant()}>References</StyledTitle>
        <StyledDesc variants={textVariant()}>
          See what others have to say about working with me.
        </StyledDesc>
        <StyledCardContainer>
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <StyledInfo>
                <StyledSpan>{activeSlide.description}</StyledSpan>
                <StyledName>{activeSlide.name}</StyledName>
                <StyledRole>{activeSlide.role}</StyledRole>
              </StyledInfo>
            </CSSTransition>
          </SwitchTransition>
        </StyledCardContainer>
        <StyledArrowsWrapper>
          <StyledPrev
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </StyledPrev>
          <StyledNext
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </StyledNext>
        </StyledArrowsWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default References;
