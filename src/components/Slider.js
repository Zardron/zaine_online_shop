import React, { useState } from "react";
import {
  Container,
  Arrow,
  ImgContainer,
  Image,
  Slide,
  InfoContainer,
  Title,
  Description,
  Button,
} from "../css/Home/sliderStyled";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  // const delay = 4000;
  // const timeoutRef = React.useRef(null);

  // const resetTimeout = () => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setSlideIndex((prevIndex) =>
  //         prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [slideIndex]); 

  const handleClick = (direction) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((data) => (
          <Slide bg={data.bg} key={data.id}>
            <ImgContainer>
              <Image src={data.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{data.title}</Title>
              <Description>{data.description}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
