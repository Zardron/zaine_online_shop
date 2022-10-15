import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 80px;
  background-color: #fbfaf9;
  ${mobile({ height: "50px" })}
`;

export const CompanyLogoNav = styled.img`
  width: 100px;
  height: 80px;
  ${mobile({ height: "50px", width: "50px" })}
`;

export const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0 10px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  ${mobile({ fontSize: "12px" })}
`;

export const CompanyLogo = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1.5, justifyContent: "center" })}
`;

export const Language = styled.text`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

export const SearchContainer = styled.text`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 100%;
  border-radius: 10px;
  ${mobile({ display: "none" })}
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

export const MenuItem = styled(Link)`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  ${mobile({ fontSize: "12px" })}
`;
