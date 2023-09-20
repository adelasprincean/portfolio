import styled from "styled-components";
import MailIcon from "../../assets/svg/MailIcon";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

export const StyledContactHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledMailIcon = styled(MailIcon)``;

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const StyledTitle = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.white};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const StyledDesc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.white + 99};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const StyledContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

export const StyledContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

export const StyledContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_primary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.white};
  }
`;

export const StyledContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_primary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.white};
  }
`;

export const StyledContactButton = styled.input`
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.gradient};
  background: linear-gradient(
    225deg,
    hsla(318, 100%, 17%, 1) 0%,
    hsla(51, 100%, 82%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(318, 100%, 17%, 1) 0%,
    hsla(51, 100%, 82%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(318, 100%, 17%, 1) 0%,
    hsla(51, 100%, 82%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 600;
  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px -2px #1f2634, -20px -20px 30px #1f2634;
    filter: brightness(1);
  }
`;
