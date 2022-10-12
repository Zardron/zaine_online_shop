import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  PrivayPolicy,
  Title,
  Wrapper,
} from "../css/Register/registerStyled";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Middle Name (optional)" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <PrivayPolicy>PRIVACY POLICY</PrivayPolicy>
          </Agreement>
          <Button>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
