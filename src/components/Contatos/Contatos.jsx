import React from 'react'
import { Form } from "./StylesContato"
import "./Contato.css"
export const Contatos = () => {
  return (
    <div>
     

           <Form>
           <p>Entre em contato </p>
    
    <label>
        <span> Email:</span>
        <input
         type="email" 
         name='Email' 
         required
         placeholder='Email do usuário'
       
        
         />
    </label>

    <label>
        <span> Nome:</span>
        <input
         type="name" 
         name='nome' 
         required
         placeholder='nome do usuário'
         />
    </label>

    <label>
        <span> Telefone:</span>
        <input
         type="nome" 
         name='number' 
         required
         placeholder='Telefone do usuário'
         />
    </label>

    <label for=""> deixe sua Mensagem</label>
                        <textarea rows="4"></textarea>
                        <button type="submit" id="formId">Sua mensagem </button>

 
    </Form>
    <section id="contatos">
      <div className="container-contatos">
        <div className="contatos">
          <div className="icons">
            <a href="#">
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-github-f"><i class="bi bi-github"></i>
                </span>
              </div>
              <div className="text">GitHub</div>
            </a>
            <a href="#">
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-linkedin-in"><i class="bi bi-linkedin"></i>
                </span>
              </div>
              <div className="text">Linkedin</div>
            </a>
            <a href="#">
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-gmail-f"><i class="bi bi-gmail"><i class="bi bi-envelope-fill"></i>
                </i>
                </span>
              </div>
              <div className="text">Gmail</div>
            </a>
            <a href="#">
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-twitter-f"><i class="bi bi-twitter"></i>
                </span>
              </div>
              <div className="text">Twitter</div>
            </a>
          </div>
        </div>
      </div>
    </section>
      
        </div>
  )
}
