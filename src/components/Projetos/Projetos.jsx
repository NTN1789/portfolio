import React from 'react'

import { ContainerMain } from '../Main/MainStyled'
import  {useState,useEffect} from'react'
import { Text } from './StylesProjetos'


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

  useEffect(  () => {
    fetch('https://api.github.com/users/NTN1789/repos')
    .then(Response => Response.json ())
    .then(data => {
        setRepositories(data)
    })
 
} , []); // carregar informações na tela

  return (
    <div>
        <ContainerMain style={{height: "100vw", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", backgroundColor: "#171717"}}>
           <Text className='text'>{Juntar}</Text>
  
        <ul>
         {repositories.map((repository => 
         <li key={repository.id} > 
         {repository.name}
    
         
          </li> ))}
       </ul>


     
       </ContainerMain>
        </div>
  )
}

export default Projetos