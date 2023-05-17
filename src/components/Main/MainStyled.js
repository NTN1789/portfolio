import styled from "styled-components";



export const ContainerMain = styled.main`
 
height:100vh;

width:100%;
  color: #fff;


  background-color: #171717;

  @media (max-width: 950px) {
width:100vh;

}

@media screen and (max-width:768px) {
  width:100%;

}

  `

export const CaixaTitle = styled.div`
display: flex;
 
  justify-content: center;
  align-items:center;
flex-wrap:wrap;
  width: 50%;
  height:50%;  

  color: #ffffff;
 

  @media (max-width: 900px) {
width:45vh;



}

@media screen and (max-width:768px) {
  width:50h;
}

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
    font-size:1.5rem;
   }

   @media (max-width: 900px) {
font-size:15px;
text-align:center;

p{
  text-align:center;
}



}



`


export const BoxButtons = styled.div `
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;

width:50%;
position:relative;
top:-5.8em;

@media (max-width: 900px) {
width:50vh;


}

@media screen and (max-width:768px) {
  width:50vh;
}

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
 
  @media (max-width: 900px) {
position:relative;

top:10rem;


}

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

  @media (max-width: 900px) {
 position:relative;

top:10rem;


}

@media screen and (max-width:768px) {
  position:relative;
top:10rem;
}

  `






  export const BoxImage = styled.div `
display: flex;
justify-content: flex-end;
width:90%;

@media (max-width: 900px) {

width:35vh;



}






`



export const Foto = styled.img ` 
position:absolute;
top:15rem;
border-radius:50%;
height:45%;
width:25%;

  @media (max-width: 900px){
width:30vh;


}

@media screen and (max-width:768px) {

position:relative;
top:5rem;
  border-radius:100px;
width:20vh;
height:50vw;
}


`

