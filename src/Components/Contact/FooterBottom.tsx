import "./Contact.css";
interface FooterBottomProps{
  policies1:string
  policies2:string
  policies3:string
  faceIcon:string
  twitterIcon:string
  linkedIcon:string
}
const FooterBottom = ({
  policies1,
  policies2,
  policies3,
  faceIcon,
  twitterIcon,
  linkedIcon
}:FooterBottomProps) => {
  return (
    <div className="FooterBottom">
        <div className="policies">
            <p>{policies1}</p>
            <p>{policies2}</p>
            <p>{policies3}</p>
        </div>
        <div className="iconeSocial">
            <img src={faceIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={linkedIcon} alt="" />
        </div>
        
    </div>
  )
}

export default FooterBottom