import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color:teal;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border: 1.5px solid black;
  border-radius: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 60%;
    height: 15%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>RK SPORTS</Logo>
          <Desc>
            asfc asifu oasbbui9we8pha ruaip jwnf098ahn ikf90jzs8ijci 8hja89w f
            auid snbaiudb iuas  aknmodfi mnaopsdmn opa mpomfao psmfopasmoa fmaoms f
            mfio uigbruiohgiu9hog ipnjh9e8hj09ije 90jomfM io NEIO pgION ikn sdiofmi 
          </Desc>

          <SocialContainer>
              <SocialIcon>
                <Facebook />
              </SocialIcon>
              <SocialIcon>
                <Instagram />
              </SocialIcon>
              <SocialIcon>
                <Twitter />
              </SocialIcon>
              <SocialIcon>
                <Pinterest />
              </SocialIcon>
            </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Cricket</ListItem>
          <ListItem>Football</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 132 1 231 kiano  aoifno  asfki
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +94 77 12 34 567
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@sports.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
