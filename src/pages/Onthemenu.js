import {Image,Button } from 'react-bootstrap';
import OnthemenuBG from '../components/OnthemenuBG.png';
import OnthemenuBGNav from '../components/OnthemenuBGNav.png'
import 'bootstrap/dist/css/bootstrap.min.css';



const onthemenu =() => {
    return (
      <>
      <center>
      <Image src={OnthemenuBGNav} fluid 
       width= '70% '
      />
      </center>
      <Button href="/ingredients" variant="outline-*" >
      <Image src={OnthemenuBG} fluid 
      display= 'block'
      margin-left= 'auto'
      margin-right= 'auto'
      width= '50% ' />
      </Button>
    </>
    );
  }
  
  export default onthemenu;

