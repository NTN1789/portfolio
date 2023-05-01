import React from 'react'

import { ContainerMain } from '../Main/MainStyled'
import  {useState,useEffect} from'react'
import { Text } from './StylesProjetos'
import { GlobalStyle } from '../../style/global'


const Projetos = () => {
    const Frase = " seja Bem vindo(a) aos meus projetos";
    const [Juntar, setJuntar] = useState("");
    const [count, setCount] = useState(0);
    const [repositories , setRepositories] = useState([]) // array vazio para lista

    const Separada = Frase.split("");
 useEffect(() => {
    if (count < Separada.length) {
      setTimeout(() => {
        setCount(count + 1);
        setJuntar(Juntar.concat(Separada[count]));
      }, 275);
    }
  });

  

  return (
    <>
      <GlobalStyle/>
        <ContainerMain style={{height: "100vw", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", backgroundColor: "#171717"}}>
           <Text className='text'>{Juntar}</Text>
           <div class="flex flex-wrap">
  <div></div>
  <div>02</div>
  <div>03</div>
</div>

     
       </ContainerMain>
        </>
  )
}

export default Projetos