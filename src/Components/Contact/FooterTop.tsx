
import "./Contact.css"
interface FooterTopProps {
  image: string;
  desc: string;
  iconEmail: string;
  emailText: string;
  iconPhone: string;
  phoneText: string;
  iconLocation: string;
  locationText: string;

  Home: string;
  HomeLink1: string;
  HomeLink2: string;
  HomeLink3: string;

  about: string;
  aboutLink1: string;
  aboutLink2: string;
  aboutLink3: string;
  aboutLink4: string;
  aboutLink5: string;

  accademy: string;
  accademyLink1: string;
  accademyLink2: string;

  contact: string;
  contactLink1: string;
  contactLink2: string;
}
const FooterTop = ({
  image,
  desc,
  iconEmail,
  emailText,
  iconPhone,
  phoneText,
  iconLocation,
  locationText,
  Home,
  HomeLink1,
  HomeLink2,
  HomeLink3,
  about,
  aboutLink1,
  aboutLink2,
  aboutLink3,
  aboutLink4,
  aboutLink5,
  accademy,
  accademyLink1,
  accademyLink2,
  contact,
  contactLink1,
  contactLink2
}:FooterTopProps) => {
  return (
    <div>
      <div className="FooterTop">
               <div className="column1">
            <div className="Column1Head">
               <img src={image} alt="" />
               <p>{desc}</p>
            </div>
           <div className="Contact">
              <div className="email">
                   <div className="image">
                    <img src={iconEmail} alt="" />
                </div>
                  <p>{emailText}</p>
              </div>
              <div className="phone">
                   <div className="image">
                    <img src={iconPhone} alt="" />
                </div>
                  <p>{phoneText}</p>
              </div>
              <div className="location">
                <div className="image">
                    <img src={iconLocation} alt="" />
                </div>
                  <p>{locationText}</p>
              </div>
           </div>
        </div>
        <div className="column2">
            <div className="Home">
              <p>{Home}</p>
              <p>{HomeLink1}</p>
              <p>{HomeLink2}</p>
              <p>{HomeLink3}</p>
            </div>
            <div className="About">
                <p>{about}</p>
              <p>{aboutLink1}</p>
              <p>{aboutLink2}</p>
              <p>{aboutLink3}</p>
              <p>{aboutLink4}</p>
              <p>{aboutLink5}</p>
            </div>
            <div className="Academics">
                <p>{accademy}</p>
              <p>{accademyLink1}</p>
              <p>{accademyLink2}</p>
            </div>
            <div className="ContactUs">
                  <p>{contact}</p>
              <p>{contactLink1}</p>
              <p>{contactLink2}</p>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default FooterTop