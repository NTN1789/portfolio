import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import Projetos from './components/Projetos/Projetos'
import { Contatos } from './components/Contatos/Contatos'


import NavBar from './components/NavBar/NavBar'
import SobreMim from './components/sobreMim/SobreMim'
import Main from './components/Main/Main'




function App() {
  


  return (
      <>  
   

          <BrowserRouter>
        
         <NavBar/>
         
          <Routes>  
            <Route path="/" element={<Main/>} />"
         <Route path="/projetos" element={<Projetos/>} />  
         <Route path="/Contatos" element={<Contatos/>} />  
         <Route path="/sobreMim" element={<SobreMim/>} />  
            </Routes>  
          
          </BrowserRouter>
          
          

      
            
            
          

 
    </>
  )
}

export default App
