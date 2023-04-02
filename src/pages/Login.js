import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(teal,green,teal), center;
    display: flex;
    align-items: center;
    justify-content:center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding:20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight:300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 8px;
`;

const Button = styled.button`
    width: 20%;
    padding: 10px 15px;
    border: 3px solid teal;
    background-color:white;
    cursor: pointer;
    margin-bottom:5px;
    &:hover{
        background-color: teal;
        color: white;
    }
`;

const Link = styled.a`
    margin:8px 0px 0px 0px;
    font-size:12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
