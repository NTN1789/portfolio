import React from 'react'

export const Contatos = () => {
  return (
    <div>
           <form>
    
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
        <span> Senha:</span>
        <input
         type="password" 
         name='Password' 
         required
         placeholder='Senha do usuário'
         />
    </label>


 
</form>
        
        </div>
  )
}
