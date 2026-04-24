import type { ITopBanner } from '../../../../types';
import './TopBanner.css';
import { Link } from 'react-router-dom';
import BottomTopBannnerAbstract from '../../../../assets/icons/BottomTopBannnerAbstract.png'
import AbstractDesign from '../../../../assets/icons/AbstractDesign.png'
import rightVector from '../../../../assets/icons/right-vector.png'
import leftVector from '../../../../assets/icons/left-vector.png'

const TopBanner = ({ text, link, icon }: ITopBanner) => {
  return (
    <div className="TopBanner center-flex p-relative">
      <img className='bottom-vector p-absolute' src={BottomTopBannnerAbstract} />
      <img className='top-vector p-absolute' src={AbstractDesign} />
      <img className='right-vector p-absolute' src={rightVector} />
      <img className='left-vector p-absolute' src={leftVector} />

      <Link to={link} className="TopBannerContent p-relative flex">
        <span>{text}</span>
        <span className="top-banner-icon center-flex">
          <img src={icon} alt="arrow" />
        </span>
      </Link>
    </div>
  );
};

export default TopBanner;
