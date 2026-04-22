import FooterTop from "./FooterTop"
import "./Contact.css"
import FooterBottom from "./FooterBottom";
const DataTop = {
  brand: {
    logo: "/Task-2-adv/LogoFooter.png",
    description:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    contacts: [
      { icon: "/Task-2-adv/email.png", text: "hello@littlelearners.com" },
      { icon: "/Task-2-adv/phone.png", text: "+91 91813 23 2309" },
      { icon: "/Task-2-adv/location.png", text: "Somewhere in the World" },
    ],
  },

  navColumns: [
    {
      title: "Home",
      links: ["Features", "Our Testimonials", "FAQ"],
    },
    {
      title: "About Us",
      links: [
        "Our Mission",
        "Our Vision",
        "Awards and Recognitions",
        "History",
        "Teachers",
      ],
    },
    {
      title: "Academics",
      links: ["Special Features", "Gallery"],
    },
    {
      title: "Contact Us",
      links: ["Information", "Map & Direction"],
    },
  ],
};
const DataBottom={
    policies: ["Terms of Service", "Privacy Policy", "Cookie Policy"],

  socials: ["/Task-2-adv/face.png", "/Task-2-adv/Twitter.png", "/Task-2-adv/LinkedIn.png"],

  copyright:
    "Copyright © [2023] Little Learners Academy. All rights reserved.",
}
const FooterSection = () => {
  
  return (
    <div className="ContactContainer">
        <div className="ContactTop">
            <FooterTop
             image={DataTop.brand.logo}
             desc={DataTop.brand.description}
             iconEmail={DataTop.brand.contacts[0].icon}
             emailText={DataTop.brand.contacts[0].text}
             iconPhone={DataTop.brand.contacts[1].icon}
             phoneText={DataTop.brand.contacts[1].text}
             iconLocation={DataTop.brand.contacts[2].icon}
             locationText={DataTop.brand.contacts[2].text}
             Home={DataTop.navColumns[0].title}
             HomeLink1={DataTop.navColumns[0].links[0]}
             HomeLink2={DataTop.navColumns[0].links[1]}
             HomeLink3={DataTop.navColumns[0].links[2]}
             about={DataTop.navColumns[1].title}
             aboutLink1={DataTop.navColumns[1].links[0]}
             aboutLink2={DataTop.navColumns[1].links[1]}
             aboutLink3={DataTop.navColumns[1].links[2]}
             aboutLink4={DataTop.navColumns[1].links[3]}
             aboutLink5={DataTop.navColumns[1].links[4]}
             accademy={DataTop.navColumns[2].title}
             accademyLink1={DataTop.navColumns[2].links[0]}
             accademyLink2={DataTop.navColumns[2].links[1]}
             contact={DataTop.navColumns[3].title}
             contactLink1={DataTop.navColumns[3].links[0]}
             contactLink2={DataTop.navColumns[3].links[1]}
             />
             
        </div>
        <hr/>
          <div className="ContcatBottom">
              <FooterBottom
              policies1={DataBottom.policies[0]}
              policies2={DataBottom.policies[1]}
              policies3={DataBottom.policies[2]}
              faceIcon={DataBottom.socials[0]}
              twitterIcon={DataBottom.socials[1]}
              linkedIcon={DataBottom.socials[2]}
              />
          </div>
        <hr/>
         <p className="Footer">{DataBottom.copyright}</p>
    </div>
  )
}

export default FooterSection