import "../style/Button1.css"

import eye from '../img/eye.svg'
import rocketLaunch from '../img/rocketLaunch.svg'

function Button1(props) {
  const href = props?.href || '/'
  const text = props?.text || 'Button'
  const svg = props?.svg == 'eye'
    ? eye
    : rocketLaunch

  return (
    <a href={href} className={
      props.visible
        ? props.visible
        : ''
    }>
      <div className="button1 smart">
        <img src={svg}></img>
        <div className="work-sans">{text}</div>
      </div>
    </a>
  )
}

export default Button1;