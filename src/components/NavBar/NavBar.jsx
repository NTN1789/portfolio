import * as S from "./headerStyled"
import { GlobalStyle } from "../../style/Global"
import { NavLink } from 'react-router-dom'










export default  function Home ()  {
 


 
    return(
        <>

  
        <GlobalStyle/>

     
      <S.banner>
        


        <ul>

        <NavLink to='/'> Home </NavLink>
      <NavLink to='/projetos'> Projetos </NavLink>
      <NavLink to='/Contatos'> contatos </NavLink>
      <NavLink to='/sobreMim'> sobre mim  </NavLink>
 
        
 
        </ul>

      
     
      </S.banner>

        
   


        

        </>
    )
}

