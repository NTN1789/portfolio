import * as S from "./headerStyled"
import { GlobalStyle } from "../../style/Global"
import { NavLink } from 'react-router-dom'

import { useState } from "react"

import Menu from "../MenuMobile/Menu"










export default  function Home ()  {
  const [isOpen, setIsOpen] = useState(false);

 
    return(
        <>

        <GlobalStyle/>


      <S.banner  >
        <div className="mobile">
      <span className="material-icons menu-btn" onClick={() => setIsOpen(true)}>
        menu
      </span>
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
      </div>
     


        <ul >

        <NavLink to='/'> Home </NavLink>
      <NavLink to='/projetos'> Projetos </NavLink>
      <NavLink to='/Contatos'> contatos </NavLink>
      <NavLink to='/sobreMim'> sobre  </NavLink>
 
        
 
        </ul>

      
   
      </S.banner>

        
   


        

        </>
    )
}

