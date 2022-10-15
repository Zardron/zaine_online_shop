import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import {
  Button,
  Container,
  Form,
  Input,
  Link,
  LinkContainer,
  RegisterNow,
  Title,
  Wrapper,
} from "../css/Login/loginStyled";

const Login = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Wrapper>
          <Title>LOGIN</Title>
          <Form>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <LinkContainer>
              <RegisterNow>
                DON'T HAVE ACCOUNT YET?{" "}
                <Link href="https://www.facebook.com" target="_blank">
                  REGISTER NOW
                </Link>
              </RegisterNow>
              <Link href="https://www.facebook.com" target="_blank">
                FORGOT PASSWORD?
              </Link>
            </LinkContainer>
            <Button>LOGIN</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
