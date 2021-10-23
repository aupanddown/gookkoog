import {Image} from 'react-bootstrap';
import LoginBG from '../components/LoginBG.png';
import 'bootstrap/dist/css/bootstrap.min.css';



const Login =() => {
    return (
      <div className='CartBG'>
      <center>
      <Image src={LoginBG} fluid
      display= 'block'
      margin-left= 'auto'
      margin-right= 'auto'
      width= '50% '
        />
      </center>
      </div>
    );
  }
  
  export default Login;

