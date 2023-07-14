import { Link } from 'react-router-dom';
import videoBg from './assets/song.mp4';
import './signup.css';
function RegisterForm(){
    return (
      <div className='main'>
      <div className='overlay'>
     <video src={videoBg} autoPlay loop muted/>
      <div className='signup'>
        <div className='sign'><br/>
          <h3>Signup with BeatPace</h3><br/>
          <form>
          <div className='acc1'>
            <div class="email">
            <input type="email" placeholder="Email Address"></input>
            </div>
            </div><br/>
            <div class="acc2">
            <div class="email">
            <input type="password" placeholder="New Password"></input>
            </div>
            </div><br/>
            <div class="acc3">
             <div class="email">
            <input type="password" placeholder="Confirm Password"></input>
            </div>
            </div>
            <br/><br/>
            </form>

          <div className='sign1'><br/>
          <Link to='/'>
            <input type="button" value="Sign Up">
           </input>
           </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
      );
  }
export default RegisterForm;