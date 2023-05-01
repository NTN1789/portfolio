import React from 'react'
import { Image,Alinhamento } from './sobreStyles'


export const Card = (props) => {

  // 
  return (
  
  <>


<div className="grid gap-5 grid-cols-3 grid-rows-4">
              <Image  src={props.imagem} alt="" />


            <Alinhamento>{props.nome}</Alinhamento>
</div>


  












            
           
        
 
        
      
     

 
</>  
  
  )
}
