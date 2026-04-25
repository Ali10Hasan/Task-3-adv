import { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router";
interface NavMenuElement{
  content:string,
  path:string
}
interface NavMenuProps {
  logo: string;
  NavElemnets: NavMenuElement[];
}

const NavMenu = ({ logo, NavElemnets }: NavMenuProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.NavMenuContainer}>
      <div className={styles.NavMenuContent}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>

        <div className={`${styles.NavElemnts} ${show ? styles.Show : ""}`}>
          <ul>
            {NavElemnets.map((item, index) => {
              return <li key={index}> <NavLink to={item.path}  className={({isActive})=>`${isActive?styles.active:""}`} onClick={()=>setShow(false)}>{item.content}</NavLink></li>;
            })}
          </ul>
        </div>

        <div className={styles.BarsIcon} onClick={() => setShow(!show)}>
          <img src="/Task-3-adv/menu.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;