import {Image} from 'react-bootstrap';
import ContactusBG from '../components/ContactusBG.png';
import 'bootstrap/dist/css/bootstrap.min.css';



const Contactus =() => {
    return (
      <center>
      <Image src={ContactusBG} fluid 
      display= 'block'
      margin-left= 'auto'
      margin-right= 'auto'
      width= '50% '
       />
       </center>
    );
  }
  
  export default Contactus;

