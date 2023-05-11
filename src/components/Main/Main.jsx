
import Carta from "../../assets/carta.jpg"
import { Buttons, ContainerMain, CaixaTitle, Tilte, BoxImage,  ButtonsCv, BoxButtons, Imagem, Foto} from './MainStyled'
import Natan from"../../assets/FotoN.jpg"
import Curriculo from "../../assets/Natan Almeida da silva-3.pdf"
import { GlobalStyle } from "../../style/Global"




const Main = () => {


  return (
    <>
      <GlobalStyle/>
    <ContainerMain>
        <CaixaTitle> 
   <Tilte> 
 <h1> olá Humano , me chamo Natan Almeida da  silva   </h1>
   
   
   <p>Desenvolvedor Web </p>
        </Tilte>


        </CaixaTitle>
        <BoxButtons>

<a href={Curriculo}  target="_blank" >  <ButtonsCv>Download CV  </ButtonsCv>  </a> 
  <Buttons> Linkedln </Buttons>
</BoxButtons>

       <BoxImage>
        <Imagem src={Carta} alt="Natan"/>

       <Foto  src={Natan} alt="Natan"/>
       
       </BoxImage>
       
        
  
        </ContainerMain>
    
        </>  
  )
}

export default Main