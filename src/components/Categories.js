import React from "react";
import {
  CategoryContainer,
  Container,
  Title,
} from "../css/Home/categoriesStyled";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <>
      <Title>CATEGORY</Title>
      <Container>
        <CategoryContainer>
          {categories.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </CategoryContainer>
      </Container>
    </>
  );
};

export default Categories;
