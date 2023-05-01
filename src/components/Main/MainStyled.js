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

  width: 78%;
  height: 55vh;
  color: #ffffff;
  gap:1.2rem;


`
export const Tilte = styled.h1 `
   display:flex;
   flex-direction:column;
   justify-content:center;
   text-align:center;
   font-size:2.2rem;
   padding:20px 45px;

   gap:1.6rem;
   

   p{
    text-align:center;
    font-size:2.5rem;
   }
`

export const Buttons = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  width: 15%;
  
  text-align: center;
  border: 3px solid   #09B4E0;;
  padding: 12px 15px;
  background-color:   #09B4E0;
  position:relative;
  top:15vh;
  right:38rem ;


  `

export const ButtonsCv = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  width: 25%;
  height:50px;
  text-align: center;
  border: 3px solid   #09B4E0;;
  padding: 20px 65px;
  background-color:   #09B4E0;
  position:relative;
  top:15vh;
  right:36rem ;


  `






  export const BoxImage = styled.div `
display:flex;
justify-content:flex-end;
align-items:center;
height:5vw;
width:95%;
position:absolute;
top:50vh;	


`

export const Imagem= styled.img `
width:25%;


img{
  width:10vh;
}
`
