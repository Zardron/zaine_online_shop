import React from "react";
import {
  Center,
  ContactItem,
  Container,
  Image,
  Left,
  List,
  ListItem,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  SocialIconLink,
  SocialLinks,
  Title,
} from "../css/Home/footerStyled";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Container>
      <Left>
        <Image src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1665082346/popular%20items/BABE/ZA_6_qwclng.png" />
      </Left>
      <SocialLinks>
        <h4>© 2022 Zaine, Built using React and Node.</h4>
        <SocialContainer>
          <SocialIconLink
            href="https://github.com/Zardron"
            target="_blank"
            title="GitHub"
          >
            <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1665138492/social%20media%20icon/github_lslvwl.png"></SocialIcon>
          </SocialIconLink>
          <SocialIconLink
            href="https://www.linkedin.com/in/zardron-angelo-pesquera-89b8961ba/"
            target="_blank"
            title="LinkedIn"
          >
            <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1665138492/social%20media%20icon/linkedin_d9uwop.png"></SocialIcon>
          </SocialIconLink>
          <SocialIconLink
            href="mailto:zardron.pesquera1993@gmail.com?subject=INQUIRE"
            target="_blank"
            title="Gmail"
          >
            <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1665138492/social%20media%20icon/gmail_cf9x0e.png"></SocialIcon>
          </SocialIconLink>
          <SocialIconLink
            href="https://wa.me/971581874753"
            target="_blank"
            title="Whatsapp"
          >
            <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1665138492/social%20media%20icon/whatsapp_rlgkrs.png"></SocialIcon>
          </SocialIconLink>
          <SocialIconLink
            href="https://www.facebook.com/zardron.pesquera/"
            target="_blank"
            title="Facebook"
          >
            <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1665138492/social%20media%20icon/facebook_ckyqb9.png"></SocialIcon>
          </SocialIconLink>
          <SocialIconLink
            href="https://www.instagram.com/itsmezardron/"
            target="_blank"
            title="Instagram"
          >
            <SocialIcon src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1665138492/social%20media%20icon/instagram_vsdqhv.png"></SocialIcon>
          </SocialIconLink>
        </SocialContainer>
      </SocialLinks>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>About Us</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem><LocationOnIcon style={{paddingRight: "10px"}}/> Villa 7, Al Qusaidat, Ras al-khaimah, UAE</ContactItem>
        <ContactItem><CallIcon style={{paddingRight: "10px"}}/> +971 58 187 4753</ContactItem>
        <ContactItem><EmailIcon style={{paddingRight: "10px"}}/> zardron.pesquera1993@gmail.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
