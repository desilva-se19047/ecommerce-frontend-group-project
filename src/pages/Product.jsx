import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1.5px solid black;
  background-color: ${(props)=> props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
    padding: 10px;
    font-weight: 500;
    border: none;
    border: 4px solid teal;
    background-color:white;
    cursor: pointer;

  &:hover{
    background-color: teal;
    color: white;
  }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>

            <Wrapper>
                <ImgContainer>
                    <Image src="https://dac8r2vkxfv8c.cloudfront.net/images/products/d355-01-22-marucci-cat-connect--11-usa-baseball-bat--msbcc11usa-33432-1_l.jpg"/>
                </ImgContainer>

                <InfoContainer>
                    <Title>Baseball Bat</Title>
                    <Desc>
                    ad o0 aijf sionai f0i9j a[0ji9j mawoirj[i ami
                    ao awio0fio mawof ma faf a w asf af sdfsdf as
                    as afsaf asf asf saf  fsf asfa ge e
                    </Desc>
                    <Price>$ 20</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="green"/>
                            <FilterColor color="blue"/>
                            <FilterColor color="yellow"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    
                    <AddContainer>

                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>

  );
};

export default Product;
