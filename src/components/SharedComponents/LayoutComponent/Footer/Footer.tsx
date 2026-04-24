import { Link } from 'react-router-dom';
import { FadeIn } from '../../../../Animation/FadeIn';
import logo from '../../../../assets/icons/logo.png';
import type { FooterProps } from '../../../../types';
import './Footer.css';
const Footer = ({ navData, contactItems, socialLinks, legalLinks }: FooterProps) => {
  return (
    <FadeIn>
      <footer className="footer__wrapper m-section">
        <div className="footer__grid">

          <div className="footer__brand">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="footer__logo" />
            </Link>
            <p className="footer__desc">
              We believe in the power of play to foster creativity and imagination.
            </p>

            <div className="footer__contact">
              {contactItems.map((item, index) => (
                <div className="contact-info" key={index}>
                  <div className="icon-box">
                    <img src={item.icon} alt={item.type} />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="footer__links-container">
            {navData.map((group) => (
              <div key={group.id} className="footer__links-group">
                <h4>{group.title}</h4>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}><a href={link.path}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            {legalLinks.map((link) => (
              <Link key={link.label} to={link.path}>{link.label}</Link>
            ))}
          </div>

          <div className="footer__social">
            {socialLinks.map((social) => (
              <a key={social.id} href={social.path} className="social-box" target="_blank">
                <img src={social.icon} alt={social.platform} />
              </a>
            ))}
          </div>
        </div >

        <p className="footer__copyright">
          Copyright © 2026 Little Learners Academy.
          <br />
          <small>(Created By Eng. Ali Hasan)</small>
        </p>
      </footer >
    </FadeIn>

  );
};


export default Footer
