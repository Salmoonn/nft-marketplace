import "../style/Button1.css"

import { Link } from "react-router-dom";


import eye from '../img/eye.svg'
import rocketLaunch from '../img/rocketLaunch.svg'
import arrowright from '../img/ArrowRight.svg'

function Button1({
  href = '/',
  svg = '',
  text = 'Button',
  visible = ''
}) {

  switch (svg) {
    case 'eye': svg = eye; break;
    case 'rocketLaunch': svg = rocketLaunch; break;
    case 'arrowright': svg = arrowright; break;
  }

  return (
    <Link to={'/' + href} className={visible}>
      <div className="button1 smart">
        <img src={svg}></img>
        <div className="work-sans">{text}</div>
      </div>
    </Link>
  )
}

export default Button1;