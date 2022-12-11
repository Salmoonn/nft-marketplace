import "../style/Navigation.css"
import logo from '../img/logo.svg'
import logoName from '../img/logoName.svg'
import burgerMenu from '../img/burgerMenu.svg'
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">
        <div className="navigation-logo">
          <img src={logo} className="navigation-logo-img" />
          <img src={logoName} className="navigation-logo-text" />
        </div>
      </Link>
      <div className="nav-menu">
        <Link to="/" className="nav-li only-desktop">
          <div className="nav-li-button smart">
            <div className="work-sans">Marketplace</div>
          </div>
        </Link>
        <Link to='/topcreators' className="nav-li only-desktop">
          <div className="nav-li-button smart">
            <div className="work-sans">Rankings</div>
          </div>
        </Link>
        <Link to="/" className="nav-li only-desktop">
          <div className="nav-li-button smart">
            <div className="work-sans">Connect a wallet</div>
          </div>
        </Link>
        <Link to="/signup" className="only-desktop">
          <div className="nav-sign_up smart">
            <div className="nav-sign_up-inner">
              <img src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/user-1@2x.svg"></img>
              <div className="button_text">Sign Up</div>
            </div>
          </div>
        </Link>
        <Link to='/' className="not-desktop">
          <img src={burgerMenu} />
        </Link>
      </div>
    </div>
  )
}

export default Navigation;