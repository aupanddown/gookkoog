import {Image,Button } from 'react-bootstrap';
import inveg from '../components/inveg.png';
import inmeat from '../components/inmeat.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientsBGNav from '../components/IngredientsBGNav.png'



const ingredients =() => {
  return (
    <>
    <center>
    <Button href="/onthemenu" variant="outline-*" >
    <Image src={IngredientsBGNav} fluid 
     width= '70% '
    />
    </Button>
    
    <Button href="/cookingtips" variant="outline-*" >
    <Image src={inveg} fluid 
    display= 'block'
    margin-left= 'auto'
    margin-right= 'auto'
    width= '55% ' />
    <Image src={inmeat} fluid 
    
    margin-left= 'auto'
    margin-right= 'auto'
    width= '55% ' />
    </Button>
    </center>
  </>
    );
  }
  
  export default ingredients;

 