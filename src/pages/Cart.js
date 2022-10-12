import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Bottom,
  Button,
  ColorDetail,
  Container,
  Details,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductInfo,
  ProductInfoDetail,
  ProductName,
  ProductVariation,
  QuantityDetail,
  QuantityInfo,
  SizeDetail,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  TotalPrice,
  TotalPriceInfo,
  UnitPrice,
  UnitPriceContainer,
  UnitPriceDetail,
  UnitPriceInfo,
  VariationDetail,
  VariationInfo,
  Wrapper,
} from "../css/Cart/cartStyled";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <ProductInfoDetail>
              <ProductInfo></ProductInfo>
              <VariationInfo>Variations</VariationInfo>
              <UnitPriceInfo>Unit Price</UnitPriceInfo>
              <QuantityInfo>Quantity</QuantityInfo>
              <TotalPriceInfo>Total Price</TotalPriceInfo>
            </ProductInfoDetail>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>JESSIE THUNDER SHOES</ProductName>
                </Details>
              </ProductDetail>
              <ProductVariation>
                <VariationDetail>
                  <ColorDetail>Color:</ColorDetail>
                  <ProductColor color="black" />
                  <SizeDetail>Size:</SizeDetail> 37.5
                </VariationDetail>
              </ProductVariation>
              <UnitPriceDetail>
                <UnitPriceContainer>
                  <UnitPrice>$ 30</UnitPrice>
                </UnitPriceContainer>
              </UnitPriceDetail>
              <QuantityDetail>
                <ProductAmountContainer>
                  <AddIcon
                    style={{
                      border: "1px solid gray",
                      padding: "3px 3px 2px 3px",
                    }}
                  />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon
                    style={{
                      border: "1px solid gray",
                      padding: "3px 3px 2px 3px",
                    }}
                  />
                </ProductAmountContainer>
              </QuantityDetail>
              <PriceDetail>
                <TotalPrice>$ 60</TotalPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
