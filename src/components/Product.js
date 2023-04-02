import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.2);
    z-index:3;
    display: flex;
    align-items: center;
    justify-content:center;
    transition: all 0.5s ease;
    cursor: pointer;
    
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position:relative;
    border-radius: 5%;
    

    &:hover ${Info}{
        border-radius: 30%;
        opacity:1;
    }
`;

const Circle = styled.div`
    width:100px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;


 
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content:center;
    margin: 8px;
    transition: all 0.5s ease;
    
    &:hover{
        background-color: lightgreen;
        transform: scale(1.3);
    }
`;

const Product = ({item}) => {
  return (
    <Container>

      <Circle/>

      <Image src={item.img}/>

      <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
            <SearchOutlined/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
      </Info>

    </Container>
  )
}

export default Product
