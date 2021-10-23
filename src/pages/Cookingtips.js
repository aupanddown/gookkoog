import {Image,Button } from 'react-bootstrap';
import CookingtipsBG from '../components/CookingtipsBG.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import CookingtipsBGNav from '../components/CookingtipsBGNav.png'

const Cookingtips =() => {
  return (
    <center>
    <Button href="/ingredients" variant="outline-*" >
    <Image src={CookingtipsBGNav} fluid 
     width= '70%'
    />
    </Button>
    
    <Button href="/onthemenu" variant="outline-*" >
    <Image src={CookingtipsBG} fluid 
    display= 'block'
    margin-left= 'auto'
    margin-right= 'auto'
    width= '55% ' />
    </Button>
    </center>
    );
  }

export default Cookingtips;
