import "../style/Button1.css"

function Button1(props) {
  const href = props?.href || '/'
  const text = props?.text || 'Button'
  const svg = props?.svg
    ? `./img/${props.svg}.svg`
    : ''

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