import {Image} from 'react-bootstrap';
import backgroundmain from '../components/backgroundmain.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home =() => {
    return (
        <Image src={backgroundmain} fluid />
    );
  }
  
  export default Home;