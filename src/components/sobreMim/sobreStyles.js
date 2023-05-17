import styled from "styled-components";

export const Container = styled.div ` 
padding-top:5%;
display:flex;
justify-content:center;
flex-direction:column;

@media (min-width: 350px) and (max-width: 500px) {

font-size:2.5rem;
text-align:center;
position:relative;
top:2rem;

}


`

export const Conhecimentos = styled.h2 `
font-size:1.8rem;
text-align:center;
position:relative;
top:-5rem;


@media (min-width: 350px) and (max-width: 500px) {

font-size:2.5rem;
text-align:center;
position:relative;
top:2rem;

}

`


export const Image = styled.img`


width:27vh;
padding:50px 50px;


`


export const Alinhamento = styled.h3`
position:relative;
font-size:1.9rem;
text-transform:uppercase;
text-align:center;
top:-2rem;

@media (min-width: 350px) and (max-width: 500px) {

font-size:1.3rem;
}



`


export const TextoEu = styled.h4 `
font-size:1.5rem;
text-align:center;
@media (min-width: 350px) and (max-width: 500px) {

font-size:1.5rem;
text-align:center;
}

`


export const Box = styled.section `
display:flex;
justify-content:space-evenly;
align-items:center;
flex-wrap:wrap;









`

