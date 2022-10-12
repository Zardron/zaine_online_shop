import styled from 'styled-components'
import { mobile } from "../../responsive";

export const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 60px;
  font-size: 56px;
  ${mobile({ fontSize: "30px", padding: "20px 0 0 0" })}
`;