
import Carta from "../../assets/carta.jpg"
import { Buttons, ContainerMain, CaixaTitle, Tilte, BoxImage, Imagem, BoxTilte } from './MainStyled'
import Natan from"../../assets/Foto.jpg"


const Main = () => {


  return (
    <ContainerMain>
        <CaixaTitle> 
   <Tilte> 
 <h1> olá Humano , me chamo Natan silva   </h1>
   
   
   <p>Desenvolvedor Web </p>
        </Tilte>
   <Buttons>Download CV</Buttons>  <Buttons> Linkedln </Buttons>

        </CaixaTitle>
            <BoxImage>
            <Imagem src={Carta} alt='carta'></Imagem>
           
            

            </BoxImage>
       
           
  
        </ContainerMain>
    
        
  )
}

export default Main