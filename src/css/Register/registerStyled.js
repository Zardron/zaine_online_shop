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
  width: 40%;
  background-color: white;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

export const Agreement = styled.span`
  font-size: 13px;
  margin: 20px 0px;
  font-weight: 600;
`;

export const PrivayPolicy = styled.span`
  font-size: 13px;
  font-weight: Bold;
`;

export const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;
