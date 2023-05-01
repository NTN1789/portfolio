import React from 'react'
import { ContainerMain } from '../Main/MainStyled'
import { Card } from './Card'
import Data from './data'
import { GlobalStyle } from '../../style/global'
import { Alinhamento, TextoEu } from './sobreStyles'









const SobreMim = () => {
  return (
    <>
      <GlobalStyle/>
    <ContainerMain  style={{display: 'flex', justifyContent: 'space-around', alignItems:"center", flexWrap: 'wrap', padding: '130px' , height:"100%"  }}>

<Alinhamento style={{position:'relative', top: '-25px', color: 'white', fontSize: '70px'}}>sobre mim: </Alinhamento>







<TextoEu>meu nome é Natan almeida da silva , tenho 20 anos  é sou estudante de ciências e tecnologia na faculdade federal de Alfenas(UNIFAL) ,  é  o meu foco atualmente estar relacionado a tecnologia é  a criação de programas para as pessoas usarem 
    é faz a diferença na vida dela ao entrar em um programa ou página que eu criar.  </TextoEu>




    <br/>   <br/>


<TextoEu>
					Sou um desenvolvedor muito criativo por criar paginás web é
					 Tenho  grandes habilidades em desenvolvimento web .  é que faz com que as pessoas gostar com o que eu estou criando. no meu dia a dia 
				busco sempre estar antenado no que está acontecendo no mundo da tecnologia é sempre conversando com pessoas por blogs, twitter  e Discord  que me ajudar a ter um asseguramento no meus estudos é faz eu ver  que estou em uma grande área cheia de desafios e emoções  . meus Passatempos
					são ficar com minha família , jogar xadrez , gosto de escutar música , assistir séries , ler livros , sair para conversar com meus amigos e estudar
				</TextoEu>



   







 
    <h1 style={{color: 'white', fontSize: '60px'}}>conhecimentos : </h1>
      {Data.map(datas =>(
        <Card 
            key={datas.id}
            imagem ={datas.image}
            nome={datas.name}
         
        />

      ))}


    
    </ContainerMain>
    
    </>

  
  )
  
}


export default SobreMim