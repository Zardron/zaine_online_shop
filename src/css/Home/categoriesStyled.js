import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding-bottom: 80px;
  ${mobile({ padding: "0"})}
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 60px;
  font-size: 56px;
  ${mobile({ padding: "10px 0", fontSize: "30px" })}
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column"})}
`;
