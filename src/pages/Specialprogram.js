import {Image,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpecialprogramBG from '../components/SpecialprogramBG.png'
import inveg from '../components/inveg.png';
import inmeat from '../components/inmeat.png';

const Specialprogram =() => {
  return (
    <>
    <center>
    <Button href="/onthemenu" variant="outline-*" >
    <Image src={SpecialprogramBG} fluid 
     width= '70% '
    />
    </Button>
    
    <Button href="/onthemenu" variant="outline-*" >
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

export default Specialprogram;
