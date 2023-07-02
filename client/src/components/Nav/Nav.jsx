import React from 'react'
import styled from 'styled-components';
import { PersonOutlined, MenuOpenOutlined, AddOutlined } from '@mui/icons-material';

const Container = styled.div`
   width:100%;
   height:6rem;
   display: flex;
   background-color:black;
`
const Wrapper = styled.div`
   margin:0 2rem;
   flex:1;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color:white;
   gap:0.5rem;
`
const Left = styled.div`

   display:flex;
   align-items:center;
   gap:.3rem;
   cursor: pointer;
`
const Image = styled.img`
   width:55px;
   height:55px;
   object-fit:cover;
`

const LogoTitleContainer = styled.div`
   display:flex;
   flex-direction:column;
`
const Title = styled.span`
   font-size:2rem;
   font-weight: 900;
`

const Subtitle = styled.span`
   font-size: .75rem;
   letter-spacing:.18rem;
   color:lightgray;
   padding-left:5px;
`

const Center = styled.div`

   display:flex;
   justify-content: center;
`
const List = styled.ul`
   display:flex;
   list-style-type: none;
   gap:1.5rem;
`
const ListItem = styled.li`
   font-weight: 700;
   font-size:1rem;
   letter-spacing:.05rem;
   cursor:pointer;
   transition:300ms all ease;

   &:hover{
      color:red;
   }

`
const Right = styled.div`

   display: flex;
   justify-content:flex-end;
   align-items:center;
   gap:1rem;
`
const IconContainer = styled.div`
   display:flex;
   align-items:center;
   gap:1rem;
   margin-left:1rem;
`
const Icon = styled.div`
   display:flex;
   justify-content: center;
   align-items:center;
`

const ButtonContainer = styled.div`
   display:flex;
   align-items:center;
   border:1px solid lightgray;
   padding: .5rem;
   gap:0.5rem;
`

const Button = styled.button`
   background-color:red;
   border:none;
   outline:none;
   color:white;
   height:2rem;
   width:2rem;
   border-radius:4px;
   display:flex;
   align-items:center;
   justify-content:center;
   cursor: pointer;
`

const ButtonText = styled.span`
   font-weight: 900;
   font-size:.9rem;
   letter-spacing:1px;
   cursor:pointer;
`


const Nav = () => {
   return (
      <Container>
         <Wrapper>
            <Left>
               <Image src="./assets/logo.png" />
               <LogoTitleContainer>
                  <Title>Team Elite</Title>
                  <Subtitle>Brazilian Jiu Jitsu</Subtitle>
               </LogoTitleContainer>
            </Left>
            <Center>
               <List>
                  <ListItem>Home</ListItem>
                  <ListItem>About</ListItem>
                  <ListItem>Gallery</ListItem>
                  <ListItem>Schedule</ListItem>
                  <ListItem>Pricing</ListItem>
                  <ListItem>Classes</ListItem>
                  <ListItem>Contact</ListItem>
               </List>

            </Center>
            <Right>
               <IconContainer>
                  <Icon>
                     <PersonOutlined style={{fontSize:'1.8rem'}} />
                  </Icon>
                  <Icon>
                     <MenuOpenOutlined style={{fontSize:'1.8rem'}}/>
                  </Icon>
               </IconContainer>
               <ButtonContainer>
                  <Button><AddOutlined/></Button>
                  <ButtonText>JOIN CLASS NOW</ButtonText>
               </ButtonContainer>
            </Right>
         </Wrapper>
      </Container>
   )
}

export default Nav
