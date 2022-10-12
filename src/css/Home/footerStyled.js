import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  margin: 0px 10px;
  background-color: #fbfaf9;
  ${mobile({ flexDirection: "column"})}
`;

export const Left = styled.div`
  flex: .05;
  display: flex;
  align-items: center;
  ${mobile({ flexDirection: "column"})}
`;

export const SocialLinks = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({ alignItems: "center"})}
  
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 2px;
`;

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const Center = styled.div`
  flex: 2;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

export const Title = styled.h3`
padding-bottom: 5px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 3px;
`;

export const Right = styled.div`
  flex: 1.5;
  padding: 20px;
`;

export const ContactItem = styled.p`
display: flex;
align-items: center;
padding-bottom: 3.5px;
`

export const Payment = styled.img`

`
