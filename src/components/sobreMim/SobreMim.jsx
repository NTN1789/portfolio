import React from 'react'
import { ContainerMain } from '../Main/MainStyled'
import { Card } from './Cards'
import Data from './data'
import { GlobalStyle } from '../../style/Global'
import { Alinhamento, Box, TextoEu } from './sobreStyles'

import "./soft.css"







const SobreMim = () => {
  return (
    <>
      <GlobalStyle/>
    <ContainerMain  style={{display: 'flex', justifyContent: 'center', alignItems:"flex-start", flexWrap: 'wrap', padding: '130px' , height:"100%"  }}>

<Alinhamento style={{position:'relative', top: '-22px', color: 'white', fontSize: '70px'}}>sobre mim: </Alinhamento>







<TextoEu>meu nome é Natan almeida da silva , tenho 20 anos  é sou estudante de ciências e tecnologia na faculdade federal de Alfenas(UNIFAL) ,  é  o meu foco atualmente estar relacionado a tecnologia é  a criação de programas para as pessoas usarem 
    é faz a diferença na vida dela ao entrar em um programa ou página que eu criar.  </TextoEu>




    <br/>   <br/>


<TextoEu>
					Sou um desenvolvedor muito criativo por criar paginás web , é 
					 Tenho  grandes habilidades em desenvolvimento web .  é que faz com que as pessoas gostar com o que eu estou criando. no meu dia a dia 
				busco sempre estar atento no que está acontecendo no mundo da tecnologia é sempre conversando com pessoas por blogs, twitter  e Discord  que me ajudar a ter um asseguramento no meus estudos é faz eu ver  que estou em uma grande área cheia de desafios e emoções  . meus Passatempos
					são ficar com minha família , jogar xadrez , gosto de escutar música , assistir séries , ler livros , sair para conversar com meus amigos e estudar
				</TextoEu>



   







 <Box>


    <h1 style={{color: 'white', fontSize: '3rem'}}>conhecimentos : </h1>
      {Data.map(datas =>(
        <Card 
        key={datas.id}
        imagem ={datas.image}
        nome={datas.name}
        
        />
        
        ))}


    
        </Box>

        <div className="conhecimentos-sub-title">
        <h4>Soft Skills</h4>
      </div>
      <div className="container-soft-skills" data-aos="fade-right" data-aos-duration="1000">
        <div className="cards-soft-skills">
          <div className="content-soft-skills">
            <h2>01</h2>
            <h3>Empatia</h3>
            <p>Empatia é a capacidade psicológica de sentir o que sentiria outra pessoa, caso estivesse na mesma situação vivenciada por ela.</p>
            <a href="https://www.significados.com.br/empatia/" target="_blank">Leia Sobre</a>
          </div>
        </div>

        <div className="cards-soft-skills">
          <div className="content-soft-skills">
            <h2>02</h2>
            <h3>Resiliência</h3>
            <p>Resiliência é a capacidade de voltar ao estado normal. No campo da psicologia, resiliência significa resistência ao choque, à adversidade.</p>
            <a href="https://www.significados.com.br/resiliencia/" target="_blank">Leia Sobre</a>
          </div>
        </div>

        <div className="cards-soft-skills">
          <div className="content-soft-skills">
            <h2>03</h2>
            <h3>Otimismo</h3>
            <p>Significa estar sempre atento ao ambiente e às pessoas a sua volta e estar sempre em busca de uma solução que melhore própria vida e a dos outros.</p>
            <a href="https://www.dicio.com.br/otimismo/" target="_blank">Leia Sobre</a>
          </div>
        </div>
      </div>
    </ContainerMain>
    
    </>

  
  )
  
}


export default SobreMim