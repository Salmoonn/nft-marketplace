import "../style/SignUp.css";

import image from "../img/signup.png";
import user from "../img/user.svg";

function SignUp() {
  return (
    <div className="signup">
      <div className='signup-image'>
        <img src={image} />
      </div>
      <div className="signup-body column">
        <div className='signup-title work-sans column'>
          <div className="signup-headline h2">Create Account</div>
          <div className="signup-subhead body-work">
            Welcome! Enter Your Details And Start Creating, Collection And Selling NFTs
          </div>
        </div>
        <form className="signup-form column">
          <div className="signup-form-body column">
            <div className="signup-form-input">
              <img src={user} />
              <input type="user" name="name" placeholder="Username"></input>
            </div>
            <div className="signup-form-input">
              <img src={user} />
              <input type="email" name="email" placeholder="Email Address"></input>
            </div>
            <div className="signup-form-input">
              <img src={user} />
              <input type="password" name="password" placeholder="Password"></input>
            </div>
            <div className="signup-form-input">
              <img src={user} />
              <input type="password" name="password2" placeholder="Confirm Password"></input>
            </div>
          </div>
          <button className="signup-submit work-sans smart">
            Create account
          </button>
        </form>
      </div>
    </div>
  )
}

export { SignUp }