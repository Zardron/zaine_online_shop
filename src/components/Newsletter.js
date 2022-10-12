import React from "react";
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title,
} from "../css/Home/newsletterStyled";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>To get in touch on your favorite products.</Description>

      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
