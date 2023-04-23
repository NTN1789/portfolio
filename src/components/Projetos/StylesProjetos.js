
import styled from "styled-components";



export const Imagem = styled.img`

object-fit: cover;  

width: 100%;
height: 100vw;
object-fit: cover;
`

export const Text = styled.h1 `
  position: relative;
font-size: 2vw;

color: #131314;
-webkit-text-stroke: 2px tomato;
    /*  #383d52*/
text-transform: uppercase;

&::before {
content: attr(data-text);
position: absolute;
top: 0;
left: 0;
width: 0;
height: 100%;
color: #9aa5c3;
-webkit-text-stroke: 0 #383d52;
border-right: 2px solid #01fe87;
overflow: hidden;
animation: animate 6s linear infinite;
}

@keyframes animate {
0%,
10%,
100% {
  width: 0;
}
70%,
90% {
  width: 100%;
}
}



    



`


