import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Recipes from "../../assets/desafios/recipes.png"
import CatApi from "../../assets/desafios/ApiCat.png"
import Blog from "../../assets/desafios/Blog.png"
import CardD from "../../assets/desafios/Card.png"
import CardDogs from "../../assets/desafios/cardDogs.png"
import Pepsi from "../../assets/desafios/Pepsi.png"
import Todo from "../../assets/desafios/Todo.png"
import Slider from "../../assets/desafios/slider.png"
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
      </CardActions>
    </Card>
     
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Blog}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
       Blog
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
      </CardActions>
    </Card>
     
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Projeto
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
      </CardActions>
    </Card>
     
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
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
      </CardActions>
    </Card>
    
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
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
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
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
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 372 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
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
      </CardActions>
    </Card>
          </BoxContainer>
     
        </>
  )
}

export default Projetos