import {Image} from 'react-bootstrap';
import SignupBG from '../components/SignupBG.png';
import 'bootstrap/dist/css/bootstrap.min.css';



const Signup =() => {
    return (
      <div className='CartBG'>
      <center>
      <Image src={SignupBG} fluid 
      display= 'block'
      margin-left= 'auto'
      margin-right= 'auto'
      width= '50% ' />
      </center>
      </div>
    );
  }
  
  export default Signup;

