import styled from "styled-components";


export const ContainerMain = styled.main`
  padding-top: 5%;
  height:45.8vw;
  width: 100%;
  color: #fff;


  background-color: #171717;


  `

export const CaixaTitle = styled.div`
display: flex;
  flex-direction: row;


  justify-content: center;
  align-items:center;

  width: 65%;
  height: 56vh;
  color: #ffffff;
  gap:1.2rem;


`
export const Tilte = styled.h1 `
   display:flex;
   flex-direction:column;
   justify-content:center;
   text-align:center;
   font-size:1.6rem;
   padding:20px 45px;

   gap:1.6rem;
   

   p{
    text-align:center;
    font-size:1.3rem;
   }
`

export const Buttons = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  width: 20%;
  text-align: center;
  border: 2px solid tomato;
  padding: 12px 25px;
  background-color: tomato;
  position:relative;
  top:15vh;
  right:35rem ;


  `

  export const BoxImage = styled.div `
display:flex;
justify-content:flex-end;
align-items:center;
height:10vw;
width:95%;
margin:auto;
position:absolute;
top:50vh;	


`

export const Imagem= styled.img `
width:25vw;
`


export const BoxTilte = styled.div `
padding-top:20%;
display:flex;
justify-content:center;

flex-direction:column;
text-align:center;
width:50%; 
  height: 80vh;
  color: #ffffff;
  gap:1.2rem;
  margin:auto;
;

p{
  font-size:2.8rem
}




`
