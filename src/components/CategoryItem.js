import { Button, Container, Image, Info, Title } from "../css/Home/catergoryItemStyled";

const CategoryItem = ({ item }) => {
  return <Container>
    <Image src={item.img}/>
    <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
    </Info>
  </Container>;
};

export default CategoryItem;
