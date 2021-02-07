import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Menu from "../Menu/index";
import { Header, Button, Nav } from "./style";

import LogoMobile from "../../../assets/icons/logo-mobile.svg";
import Logo from "../../../assets/icons/logo.svg";
import MenuIcon from "../../../assets/icons/menu.svg";
import CloseIcon from "../../../assets/icons/close.svg";

const links = [
  {
    link: "/",
    label: "Skills",
  },
  {
    link: "/experiencia",
    label: "Experience",
  },
  {
    link: "/projetos",
    label: "Projects",
  },
  {
    link: "/blog",
    label: "Blog",
  },
];

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Header>
        <Router>
          <picture>
            <source media="(min-width: 768px)" srcSet={Logo} />
            <img src={LogoMobile} alt="Logo - Peterson Simião" />
          </picture>

          <Nav>
            <ul>
              {links.map(({ link, label }, i) => (
                <li key={i}>
                  <Link to={link}>{label}</Link>
                </li>
              ))}
            </ul>
          </Nav>

          <Button onClick={() => setShowMenu(!showMenu)}>
            <img
              src={showMenu ? CloseIcon : MenuIcon}
              alt="Icone menu hamburger"
            />
          </Button>
        </Router>
      </Header>
      <Menu links={links} active={links[0].link} show={showMenu} />
    </>
  );
};

export default HeaderComponent;
