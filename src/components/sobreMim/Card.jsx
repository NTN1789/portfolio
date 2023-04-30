import React from 'react'
import "./sobre.css"

export const Card = (props) => {
  return (
  
  <>
 
  <section className="conhecimentos">
    
      <div className="container-infos-conhecimentos">
        <div className="cards-conhecimentos-background">
          <div className="cards-conhecimentos">
            <div className="background-image-html background-image">
              <img src={props.imagem} alt="" />
            </div>
            <h3>{props.nome}</h3>
            <p>{props.sobre}</p>
        
 
          </div>
        </div>
     
      </div>
      </section>

 
</>  
  
  )
}
