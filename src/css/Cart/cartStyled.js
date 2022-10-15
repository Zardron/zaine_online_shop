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
  ${mobile({ fontSize: "7px", padding: "10px 0" })};
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ fontSize: "7px", padding: "5px" })};
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
  display: flex;
  align-items: center;
`;

export const ProductName = styled.span`
  ${mobile({ fontSize: "6px" })};
`;

export const ProductColor = styled.div`
  margin: 0 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  ${mobile({ width: "8px", margin: "0 0 0 5px", height: "8px" })};
`;

export const SizeDetail = styled.span`
  display: flex;
  font-weight: bold;
  ${mobile({ fontSize: "7px", fontWeight: "200", marginLeft: "4px" })};
`;

export const Size = styled.span`
  margin: 0 10px;
  font-weight: bold;
  ${mobile({ fontSize: "7px", margin: "0 0 0 5px", fontWeight: "200" })};
`;

export const ColorDetail = styled.span`
  display: flex;
  font-weight: bold;
  ${mobile({ fontSize: "7px", fontWeight: "200" })};
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const SubTotal = styled.div`
  font-size: 30px;
  font-weight: 200;
  color: black;
  ${mobile({ fontSize: "8px" })};
`;

export const TotalPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  color: red;
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
  ${mobile({ marginBottom: "10px" })};
`;

export const AddIconStyled = styled(AddIcon)`
  border: 1px solid gray;
  padding: 3px 3px 2px 3px;
  ${mobile({ padding: "0px", fontSize: "10px !important" })};
`;

export const RemoveIconStyled = styled(RemoveIcon)`
  border: 1px solid gray;
  padding: 3px 3px 2px 3px;
  ${mobile({ padding: "0px", fontSize: "10px !important" })};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #ebebeb;
`;

export const TableHeader1 = styled.th`
  width: 10%;
  padding: 20px;
  text-align: left;
  ${mobile({ padding: "0 0 0 10px" })}
`;

export const TableHeader2 = styled.th`
  padding: 20px;
  text-align: left;
  ${mobile({ padding: "10px 0", fontSize: "7px" })}
`;

export const TableHeader3 = styled.th`
  padding: 20px;
  text-align: left;
  ${mobile({ padding: "10px 0", fontSize: "7px" })}
`;

export const TableHeader4 = styled.th`
  width: 12%;
  padding: 20px;
  text-align: left;
  ${mobile({ padding: "10px 0", fontSize: "7px" })}
`;

export const TableHeader5 = styled.th`
  width: 12%;
  padding: 20px;
  text-align: center;
  ${mobile({ padding: "10px 0", fontSize: "7px" })}
`;

export const TableHeader6 = styled.th`
  padding: 20px;
  text-align: right;
  ${mobile({ padding: "0px 10px 0px 0px", fontSize: "7px" })}
`;

export const TableData1 = styled.td`
  width: 10%;
  padding: 20px;
  text-align: left;
  ${mobile({ padding: "0 0 0 10px" })}
  border-bottom: 1px solid #eee;
`;

export const TableData2 = styled.td`
  padding: 20px;
  text-align: left;
  ${mobile({ padding: "0px", fontSize: "7px" })}
  border-bottom: 1px solid #eee;
`;

export const TableData3 = styled.td`
  padding: 20px;
  text-align: left;
  ${mobile({ padding: "0px", fontSize: "7px" })}
  border-bottom: 1px solid #eee;
`;

export const TableData4 = styled.td`
  padding: 20px;
  text-align: left;
  ${mobile({ padding: "0px", fontSize: "7px" })}
  border-bottom: 1px solid #eee;
`;

export const TableData5 = styled.td`
  padding: 20px;
  text-align: center;
  ${mobile({ padding: "0px", fontSize: "7px" })}
  border-bottom: 1px solid #eee;
`;

export const TableData6 = styled.td`
  padding: 20px;
  text-align: right;
  ${mobile({ padding: "0px 10px 0px 0px", fontSize: "7px" })}
  border-bottom: 1px solid #eee;
`;

export const TableData7 = styled.td`
  border-bottom: 1px solid #eee;
  padding: 20px;
  text-align: right;
  ${mobile({ padding: "0px 10px 10px 0px", fontSize: "7px" })}
`;
