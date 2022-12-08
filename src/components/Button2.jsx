import "../style/Button2.css"

function Button1({ props }) {
  const href = props?.href || '/'
  const text = props?.text || 'Button'
  const svg = props?.svg
    ? `./img/${props.svg}.svg`
    : ''

  return (
    <a href={href}>
      <div className="button2 smart">
        <img src={svg}></img>
        <div className="work-sans">{text}</div>
      </div>
    </a>
  )
}

export default Button1;