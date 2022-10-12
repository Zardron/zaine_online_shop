import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://miro.medium.com/max/1018/1*iAu65xDmvpVdBJgps6EDEw.png")
      no-repeat;
  background-size: 100% 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 35%;
  background-color: white;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  font-weight: 600;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 300;
  margin-top: 20px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Link = styled.a`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`;

export const RegisterNow = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
