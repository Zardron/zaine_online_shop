import styled from "styled-components";
import { mobile } from "../../responsive";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

export const TopTexts = styled.div``;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  flex: 3;
`;

export const CartInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductInfoDetail = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ebebeb;
  padding: 20px;
  ${mobile({ padding: "5px 8px"})};
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  ${mobile({ padding: "0 9px"})};
`;

export const ProductDetail = styled.div`
  display: flex;
  flex: 1;  
`;

export const VariationDetail = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Image = styled.img`
  width: 200px;
  ${mobile({ height: "50px", width: "50px" })}
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  ${mobile({ padding: "10px" })};
`;

export const ProductName = styled.span`
  ${mobile({ fontSize: "6px" })};
`;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  ${mobile({ width: "8px", height: "8px" })};
`;

export const SizeDetail = styled.span`
  margin: 0 0 0 10px;
  font-weight: bold;
  ${mobile({ fontSize: "8px", fontWeight: "200", marginLeft: "4px" })};
`;

export const Size = styled.span`
  margin: 0 10px;
  font-weight: bold;
  ${mobile({ fontSize: "8px", marginLeft: "4px", fontWeight: "200" })};
`;

export const ColorDetail = styled.span`
  margin-right: 10px;
  font-weight: bold;
  ${mobile({ fontSize: "8px", marginRight: "5px", fontWeight: "200" })};
`;

export const ProductVariation = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({ flex: "1", flexDirection: "column" })}
`;

export const QuantityDetail = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UnitPriceDetail = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({ flex: "0.5"})};
`;

export const PriceDetail = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: "0.5"})};
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UnitPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  width: 50px;
  ${mobile({ fontSize: "8px", width: "20px" })};
`;

export const TotalPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: "8px" })};
`;

export const UnitPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: "8px" })};
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex: 1;
  ${mobile({ flex: ".8"})};
`;

export const VariationInfo = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({ fontSize: "8px"})};
`;
export const UnitPriceInfo = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({ fontSize: "8px", flex: "0.3", justifyContent:"center"})};
`;
export const QuantityInfo = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({ fontSize: "8px"})};
`;
export const TotalPriceInfo = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ fontSize: "8px"})};
`;

export const AddIconStyled = styled(AddIcon)`
 border: 1px solid gray;
 padding: 3px 3px 2px 3px;
 ${mobile({ padding: '0px', fontSize: "10px !important" })};
`;

export const RemoveIconStyled = styled(RemoveIcon)`
 border: 1px solid gray;
 padding: 3px 3px 2px 3px;
 ${mobile({ padding: '0px', fontSize: "10px !important" })};
`;
