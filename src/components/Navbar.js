import React from "react";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  MenuItem,
  CompanyLogoNav,
} from "../css/Home/homeStyled";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {" "}
          <CompanyLogoNav
            src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1665082346/popular%20items/BABE/ZA_6_qwclng.png"
            alt="Zaine Marie"
          />
          ONLINE SHOP
        </Left>

        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
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
