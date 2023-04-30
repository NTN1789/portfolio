import React from 'react'
import { ContainerMain } from '../Main/MainStyled'
import { Card } from './Card'
import Data from './data'
import  './Sobre.css'








const SobreMim = () => {
  return (
    <>
    <ContainerMain style={{height: '100%'}}>
    <div className="conhecimentos-title">
        <h2>Conhecimentos</h2>
      </div>
      <div className="conhecimentos-sub-title">
        <h4>Hard Skills</h4>
      </div>

      {Data.map(datas =>(
        <Card className="cards-conhecimento"
            key={datas.id}
            imagem={datas.image}
            nome={datas.name}
         
        />

      ))}
  

    
    </ContainerMain>
    
    </>

  
  )
  
}


export default SobreMim