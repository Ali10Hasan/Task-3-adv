import { Outlet } from "react-router-dom";
import Navbar from "../components/SharedComponents/LayoutComponent/NavBar/NavBar";
import TopBanner from "../components/SharedComponents/LayoutComponent/TopBanner/TopBanner";
import Footer from "../components/SharedComponents/LayoutComponent/Footer/Footer";
import { NAV_LINKS, TOP_BANNER_DATA, FOOTER_NAV_DATA, CONTACT_ITEMS, SOCIAL_LINKS, LEGAL_LINKS } from "../constants/data";
import logoImg from "../assets/icons/logo.png";

const Root = () => {
  return (
    <div className="container">
      <TopBanner {...TOP_BANNER_DATA} />
      <Navbar
        links={NAV_LINKS}
        logo={logoImg}
      />

      <main>
        <Outlet />
      </main>

      <Footer
        navData={FOOTER_NAV_DATA}
        contactItems={CONTACT_ITEMS}
        socialLinks={SOCIAL_LINKS}
        legalLinks={LEGAL_LINKS}
      />
    </div>
  );
};

export default Root;
