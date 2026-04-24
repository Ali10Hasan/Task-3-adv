import './CardDivider.css'
const CardDivider = () => {
  return (
    <div className="card-divider center-flex">
      <div className="dot"></div>
      <div className="line-segments">
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
      </div>
      <div className="dot"></div>
    </div>
  )
}

export default CardDivider
