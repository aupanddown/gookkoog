import {Image} from 'react-bootstrap';
import CartBG from '../components/CartBG.png';
import 'bootstrap/dist/css/bootstrap.min.css';



const Cart =() => {
    return (
      <div className="CartBG">
      <center>
      <Image src={CartBG} fluid 
      display= 'block'
      margin-left= 'auto'
      margin-right= 'auto'
      width= '55% ' />
      </center>
      </div>
    );
  }
  
  export default Cart;

