import React from "react";
import { Container, Title } from "../css/Home/productsStyled";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <Title>POPULAR PRODUCT</Title>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
