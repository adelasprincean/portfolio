import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import {
  StyledContainer,
  StyledContactHeader,
  StyledMailIcon,
  StyledWrapper,
  StyledTitle,
  StyledDesc,
  StyledContactForm,
  StyledContactTitle,
  StyledContactInput,
  StyledContactInputMessage,
  StyledContactButton,
} from "./ContactStyles";

const Contact = () => {
  //hooks
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zzkudyw",
        "template_bui7nwe",
        form.current,
        "DAik73LkO2mwIy9e6"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitle>Contact</StyledTitle>
        <StyledDesc>
          Feel free to reach out to me for any questions or opportunities!
        </StyledDesc>
        <StyledContactForm ref={form} onSubmit={handleSubmit}>
          <StyledContactHeader>
            <StyledContactTitle>Email Me </StyledContactTitle>
            <StyledMailIcon />
          </StyledContactHeader>
          <StyledContactInput placeholder="Your Email" name="from_email" />
          <StyledContactInput placeholder="Your Name" name="from_name" />
          <StyledContactInput placeholder="Subject" name="subject" />
          <StyledContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
          />
          <StyledContactButton type="submit" value="Send" />
        </StyledContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully! ✔️"
          severity="success"
          sx={{ height: "100%" }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        />
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Contact;
