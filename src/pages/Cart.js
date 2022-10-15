import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  AddIconStyled,
  Bottom,
  ColorDetail,
  Container,
  Details,
  Hr,
  Image,
  Info,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductName,
  RemoveIconStyled,
  Size,
  SizeDetail,
  SubTotal,
  Table,
  TableData1,
  TableData2,
  TableData3,
  TableData4,
  TableData5,
  TableData6,
  TableData7,
  TableHead,
  TableHeader1,
  TableHeader2,
  TableHeader3,
  TableHeader4,
  TableHeader5,
  TableHeader6,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  TotalPrice,
  UnitPrice,
  UnitPriceContainer,
  VariationDetail,
  Wrapper,
} from "../css/Cart/cartStyled";

const Cart = () => {
  let cartitem = 1;

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>MY CART</Title>
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
            <Table>
              <TableHead>
                <TableHeader1></TableHeader1>
                <TableHeader2>Name</TableHeader2>
                <TableHeader3>Variation</TableHeader3>
                <TableHeader4>Unit Price</TableHeader4>
                <TableHeader5>Quantity</TableHeader5>
                <TableHeader6>Sub Total</TableHeader6>
              </TableHead>
              

              <tbody>
                {cartitem === 0 ? (
                  <td colSpan={6} style={{textAlign: "center", height: "40vh"}}>YOUR CART IS EMPTY</td>
                ) : (
                  <>
                    <tr>
                      <TableData1>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                      </TableData1>
                      <TableData2>
                        <Details>
                          <ProductName>JESSIE THUNDER SHOES</ProductName>
                        </Details>
                      </TableData2>
                      <TableData3>
                        <VariationDetail>
                          <ColorDetail>Color: <ProductColor color="purple" /></ColorDetail>
                          
                          <SizeDetail>Size: <Size>37.5</Size></SizeDetail> 
                        </VariationDetail>
                      </TableData3>
                      <TableData4>
                        <UnitPriceContainer>
                          <UnitPrice>$ 30</UnitPrice>
                        </UnitPriceContainer>
                      </TableData4>
                      <TableData5>
                        <ProductAmountContainer>
                          <AddIconStyled />
                          <ProductAmount>2</ProductAmount>
                          <RemoveIconStyled />
                        </ProductAmountContainer>
                      </TableData5>
                      <TableData6>
                        <SubTotal>$ 60</SubTotal>
                      </TableData6>
                    </tr>

                    <tr>
                      <TableData1>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                      </TableData1>
                      <TableData2>
                        <Details>
                          <ProductName>JESSIE THUNDER SHOES</ProductName>
                        </Details>
                      </TableData2>
                      <TableData3>
                        <VariationDetail>
                          <ColorDetail>Color:</ColorDetail>
                          <ProductColor color="blue" />
                          <SizeDetail>Size: </SizeDetail> <Size>37.5</Size>
                        </VariationDetail>
                      </TableData3>
                      <TableData4>
                        <UnitPriceContainer>
                          <UnitPrice>$ 30</UnitPrice>
                        </UnitPriceContainer>
                      </TableData4>
                      <TableData5>
                        <ProductAmountContainer>
                          <AddIconStyled />
                          <ProductAmount>2</ProductAmount>
                          <RemoveIconStyled />
                        </ProductAmountContainer>
                      </TableData5>
                      <TableData6>
                        <SubTotal>$ 60</SubTotal>
                      </TableData6>
                    </tr>
                  </>
                )}
                {/* *************************************************** */}

                <tr>
                  <TableData7></TableData7>
                  <TableData7></TableData7>
                  <TableData7></TableData7>
                  <TableData7></TableData7>
                  <TableData7>TOTAL</TableData7>
                  <TableData7>
                    <TotalPrice>$ 120</TotalPrice>
                  </TableData7>
                </tr>
              </tbody>
            </Table>
            <Hr />
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
