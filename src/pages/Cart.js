import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight:600;
    cursor: pointer;
    border: ${props=> props.type === "filled" && "none"};
    background-color: ${props => 
        props.type === "filled" ? "teal" : "transparent"};
    color: ${props=> props.type === "filled" && "white"}
`;


const TopTexts = styled.div``;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content:space-between;
`;
const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`;

const Image = styled.img`
    width:200px;
`;

const Details = styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props => props.color};
    border: 1.5px solid black;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex:1;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: teal;
    border:none;
    height:1px;
    margin-right: 10px;
`;
 
const Summary = styled.div`
    flex:1;
    border: 2px solid teal;
    border-radius: 10px;
    padding:20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: white;
    color: black;
    border-radius: 10px;
    font-weight: 600;
    border: 3px solid teal;
    &:hover{
        background-color: teal;
        border-radius: 10px;
        color: white;
    }
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>

            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://dac8r2vkxfv8c.cloudfront.net/images/products/d355-01-22-marucci-cat-connect--11-usa-baseball-bat--msbcc11usa-33432-1_l.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b> BaseBall Bat</ProductName>
                                <ProductID><b>ID:</b> 10000001</ProductID>
                                <ProductColor color="red"/>
                                <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                
                                <ProductPrice>$ 50</ProductPrice>
                        </PriceDetail>
                    </Product>
                <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://dac8r2vkxfv8c.cloudfront.net/images/products/d355-01-22-marucci-cat-connect--11-usa-baseball-bat--msbcc11usa-33432-1_l.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b> Cricket batt</ProductName>
                                <ProductID><b>ID:</b> 20000010</ProductID>
                                <ProductColor color="Blue"/>
                                <ProductSize><b>Size:</b> L</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>3</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                
                                <ProductPrice>$ 100</ProductPrice>
                        </PriceDetail>
                    </Product>
                <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://dac8r2vkxfv8c.cloudfront.net/images/products/d355-01-22-marucci-cat-connect--11-usa-baseball-bat--msbcc11usa-33432-1_l.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b> Tenis bat</ProductName>
                                <ProductID><b>ID:</b> 30000300</ProductID>
                                <ProductColor color="green"/>
                                <ProductSize><b>Size:</b> S</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>5</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                
                                <ProductPrice>$ 450</ProductPrice>
                        </PriceDetail>
                    </Product>
                    
                    

                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 600</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -3</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem type = "total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 602</SummaryItemPrice>
                    </SummaryItem>

                    <Button>CHECKOUT NOW</Button>

                    
                </Summary>
            </Bottom>

        </Wrapper>
        <Footer/>
      
    </Container>
  )
}

export default Cart
