import {Image} from 'react-bootstrap';
import FavoriteBG from '../components/FavoriteBG.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const favorite =() => {
    return (
        <center>
        <Image src={FavoriteBG} fluid 
        display= 'block'
      margin-left= 'auto'
      margin-right= 'auto'
      width= '40% '
      />
      </center>
    );
  }
  
  export default favorite;
  