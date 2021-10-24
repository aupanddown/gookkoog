import {Image,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientsBGNav from '../components/IngredientsBGNav.png'
import IngredientsBG from '../components/IngredientsBG.png'



const ingredients =() => {
  return (
    <center>
    <Button href="/onthemenu" variant="outline-*" >
    <Image src={IngredientsBGNav} fluid 
     width= '70%'
    />
    </Button>
    
    <Button href="/cookingtips" variant="outline-*" >
    <Image src={IngredientsBG} fluid 
    display= 'block'
    margin-left= 'auto'
    margin-right= 'auto'
    width= '75% ' />
    </Button>
    </center>
    );
  }
  
  export default ingredients;

 