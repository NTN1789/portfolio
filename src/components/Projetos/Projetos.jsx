import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Recipes from "../../assets/desafios/recipes.png"
import CatApi from "../../assets/desafios/ApiCat.png"
import Pokedex from "../../assets/desafios/pokedex.png"
import CardD from "../../assets/desafios/Card.png"
import CardDogs from "../../assets/desafios/cardDogs.png"
import Pepsi from "../../assets/desafios/Pepsi.png"
import Todo from "../../assets/desafios/Todo.png"
import Calculadora from "../../assets/desafios/calc.png"
import Port from "../../assets/desafios/port.png"
import Copa from "../../assets/desafios/copa.png"
import  {useState,useEffect} from'react'
import { Text, BoxContainer } from './StylesProjetos'
import { GlobalStyle } from '../../style/Global'


const Projetos = () => {
    const Frase = " seja Bem vindo(a) aos meus projetos";
    const [Juntar, setJuntar] = useState("");
    const [count, setCount] = useState(0);
   

    const Separada = Frase.split("");
 useEffect(() => {
    if (count < Separada.length) {
      setTimeout(() => {
        setCount(count + 1);
        setJuntar(Juntar.concat(Separada[count]));
      }, 275);
    }
  });

  

  return (
    <>
      <GlobalStyle/>

           <Text  style={{background:" #171717"}}  className='text'>{Juntar}</Text>
           
      <BoxContainer> 



           <Card sx={{ maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Recipes}
          alt="recipes"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
         Recipes
          </Typography>
          <Typography variant="body4" color="text.secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime consequuntur omnis tempore iste, quidem earum autem dolore cum debitis cupiditate sequi tenetur dicta? Optio architecto vel voluptate dicta similique hic placeat quis, temporibus enim dolores, aliquam ipsam. Corrupti autem perferendis at nesciunt deserunt magni veniam possimus quos voluptates ducimus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        projeto
        </Button>
        <Button size="small" color="primary">
     
        </Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={CatApi}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          Cat Api
          </Typography>
          <Typography variant="body4" color="text.secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime consequuntur omnis tempore iste, quidem earum autem dolore cum debitis cupiditate sequi tenetur dicta? Optio architecto vel voluptate dicta similique hic placeat quis, temporibus enim dolores, aliquam ipsam. Corrupti autem perferendis at nesciunt deserunt magni veniam possimus quos voluptates ducimus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        projeto
        </Button>
        <Button size="small" color="primary">
        Link
        </Button>
      </CardActions>
    </Card>
     
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Pokedex}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
      PokeDex
          </Typography>
          <Typography variant="body4" color="text.secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime consequuntur omnis tempore iste, quidem earum autem dolore cum debitis cupiditate sequi tenetur dicta? Optio architecto vel voluptate dicta similique hic placeat quis, temporibus enim dolores, aliquam ipsam. Corrupti autem perferendis at nesciunt deserunt magni veniam possimus quos voluptates ducimus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        projeto
        </Button>
        <Button size="small" color="primary">
        <a href="http://pokemon-lemon.vercel.app/" target="_blank" rel="noopener noreferrer"> Link</a>
        </Button>
      </CardActions>
    </Card>
     
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Todo}
          alt="todo list"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          Todo List
          </Typography>
          <Typography variant="body4" color="text.secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime consequuntur omnis tempore iste, quidem earum autem dolore cum debitis cupiditate sequi tenetur dicta? Optio architecto vel voluptate dicta similique hic placeat quis, temporibus enim dolores, aliquam ipsam. Corrupti autem perferendis at nesciunt deserunt magni veniam possimus quos voluptates ducimus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        projeto
        </Button>
        <Button size="small" color="primary">
        <a href="https://todo-list-bay-seven.vercel.app/"  target="_blank" > Link</a>
        </Button>
      </CardActions>
    </Card>
     
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={Pepsi}
          alt="Pepsi-page"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Pepsi-page
          </Typography>
          <Typography variant="body4" color="text.secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime consequuntur omnis tempore iste, quidem earum autem dolore cum debitis cupiditate sequi tenetur dicta? Optio architecto vel voluptate dicta similique hic placeat quis, temporibus enim dolores, aliquam ipsam. Corrupti autem perferendis at nesciunt deserunt magni veniam possimus quos voluptates ducimus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        projeto
        </Button>
        <Button size="small" color="primary">
     <a href="http://pepsi-page-five.vercel.app" target="_blank" rel="noopener noreferrer"> Link</a>
        </Button>
      </CardActions>
    </Card>
    
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={CardD}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
      card animado
          </Typography>
          <Typography variant="body4" color="text.secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime consequuntur omnis tempore iste, quidem earum autem dolore cum debitis cupiditate sequi tenetur dicta? Optio architecto vel voluptate dicta similique hic placeat quis, temporibus enim dolores, aliquam ipsam. Corrupti autem perferendis at nesciunt deserunt magni veniam possimus quos voluptates ducimus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        projeto
        </Button>
        <Button size="small" color="primary">
        <a href="https://card-colaboradores.vercel.app/" target="_blank" rel="noopener noreferrer"> Link</a>
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={Calculadora}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          Calculadora
          </Typography>
          <Typography variant="body4" color="text.secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime consequuntur omnis tempore iste, quidem earum autem dolore cum debitis cupiditate sequi tenetur dicta? Optio architecto vel voluptate dicta similique hic placeat quis, temporibus enim dolores, aliquam ipsam. Corrupti autem perferendis at nesciunt deserunt magni veniam possimus quos voluptates ducimus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        projeto
        </Button>

        <Button size="small" color="primary">
        <a href="https://calculadora-eta-hazel.vercel.app/ " target="_blank" rel="noopener noreferrer"> Link</a>
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={CardDogs}
          alt="card dogs"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          Card 
          </Typography>
          <Typography variant="body4" color="text.secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime consequuntur omnis tempore iste, quidem earum autem dolore cum debitis cupiditate sequi tenetur dicta? Optio architecto vel voluptate dicta similique hic placeat quis, temporibus enim dolores, aliquam ipsam. Corrupti autem perferendis at nesciunt deserunt magni veniam possimus quos voluptates ducimus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        projeto
        </Button>
        <Button size="small" color="primary">
       <a href="http://card-sigma-nine.vercel.app/ " target="_blank" rel="noopener noreferrer"> Link</a>
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={Port}
          alt="portflow"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
         Portflow 
          </Typography>
          <Typography variant="body4" color="text.secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime consequuntur omnis tempore iste, quidem earum autem dolore cum debitis cupiditate sequi tenetur dicta? Optio architecto vel voluptate dicta similique hic placeat quis, temporibus enim dolores, aliquam ipsam. Corrupti autem perferendis at nesciunt deserunt magni veniam possimus quos voluptates ducimus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        projeto
        </Button>
        <Button size="small" color="primary">
       <a href="https://port-flow.vercel.app/# " target="_blank" rel="noopener noreferrer"> Link</a>
        </Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={Copa}
          alt="portflow"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
         Copa do mundo 
          </Typography>
          <Typography variant="body4" color="text.secondary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime consequuntur omnis tempore iste, quidem earum autem dolore cum debitis cupiditate sequi tenetur dicta? Optio architecto vel voluptate dicta similique hic placeat quis, temporibus enim dolores, aliquam ipsam. Corrupti autem perferendis at nesciunt deserunt magni veniam possimus quos voluptates ducimus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        projeto
        </Button>
        <Button size="small" color="primary">
       <a href="https://projeto-copa-gamma.vercel.app/ " target="_blank" rel="noopener noreferrer"> Link</a>
        </Button>
      </CardActions>
    </Card>
          </BoxContainer>
     
        </>
  )
}

export default Projetos