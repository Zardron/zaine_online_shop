import React from "react";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  SearchContainer,
  Input,
  MenuItem,
  CompanyLogoNav,
  MenuItemLogo,
} from "../css/Home/homeStyled";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItemLogo to={"/"}>
            {" "}
            <CompanyLogoNav
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1665082346/popular%20items/BABE/ZA_6_qwclng.png"
              alt="Zaine Marie"
            />
            ONLINE SHOP
          </MenuItemLogo>
        </Left>

        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem to="/register">REGISTER</MenuItem>
          <MenuItem to="/login">LOGIN</MenuItem>
          <MenuItem to="/cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
