import styled from "styled-components"

export const banner = styled.header`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    
    background-color: #171717;

   

    height:9vw;





    ul{
        display:flex;
     justify-content:space-around;
     align-items:center;
       
     width:60vh;
     cursor:pointer;
     flex-wrap:wrap;
     

        
    }

    a{
    text-decoration:none;
    color:white;
    font-size:1.8em;
   
    color:#09B4E0;
 
 
    list-style:none;
  


}

a{
    text-decoration:none;

}


.mobile{
    display:none;
    
}
@media  (max-width: 999px)  {
body{
    overflow-x:hidden;
}
    ul{
        display:none;

    }
    .mobile{
        display:block;

      width:60px;
      position:relative;
     
      font-size:5rem;
     
        color:blue;
  
       
    
  
       
        
    }
}

  
`





