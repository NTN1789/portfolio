
import Carta from "../../assets/carta.jpg"
import { Buttons, ContainerMain, CaixaTitle, Tilte, BoxImage, Imagem, ButtonsCv} from './MainStyled'
import Natan from"../../assets/Foto.jpg"
import Curriculo from "../../assets/Natan Almeida da silva-3.pdf"




const Main = () => {


  return (
    
    <ContainerMain>
        <CaixaTitle> 
   <Tilte> 
 <h1> olá Humano , me chamo Natan silva   </h1>
   
   
   <p>Desenvolvedor Web </p>
        </Tilte>
        <a href={Curriculo}  target="_blank" >  <ButtonsCv>Download CV  </ButtonsCv>  </a>   <Buttons> Linkedln </Buttons>

        </CaixaTitle>
            <BoxImage>
            <Imagem src={Carta}  alt='carta'>

             
            </Imagem>
           
            
           

            </BoxImage>
       
        
  
        </ContainerMain>
    
        
  )
}

export default Main