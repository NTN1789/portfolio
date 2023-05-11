import styled from "styled-components";
import Natan from "../../assets/FotoN.jpg"


export const ContainerMain = styled.main`
 
height:100vh;

width:100%;
  color: #fff;


  background-color: #171717;


  `

export const CaixaTitle = styled.div`
display: flex;
 
  justify-content: center;
  align-items:center;
flex-wrap:wrap;
  width: 50%;
  height:50%;  

  color: #ffffff;
 




`
export const Tilte = styled.h1 `
   display:flex;
   flex-direction:column;
align-items:center;
   text-align:center;
   font-size:1.8rem;

   gap:1.5rem;
   

   p{
    text-align:center;
    font-size:1.7rem;
   }
`


export const BoxButtons = styled.div `
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;

width:50%;
position:relative;
top:-5.8em;


`

export const Buttons = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  width: 20px;
 height:30px;
  text-align: center;
  border: 3px solid   #09B4E0;;
  padding: 20px 50px;
  background-color:   #09B4E0;
  cursor:pointer;
 


  `

export const ButtonsCv = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  width: 25px;
  height:30px;
  text-align: center;
  border: 3px solid   #09B4E0;;
  padding: 20px 50px;
  background-color:   #09B4E0;
  cursor:pointer;
 


  `






  export const BoxImage = styled.div `
display: flex;
justify-content: flex-end;
width:90%;






`



export const Foto = styled.img ` 
position:absolute;
top:15rem;
border-radius:50%;
height:45%;
width:25%;

`

