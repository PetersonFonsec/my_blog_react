import { BrowserRouter as Router, Link } from "react-router-dom";

import { Header, Button, Nav } from "./style";
import LogoMobile from "../../../assets/icons/logo-mobile.svg";
import Logo from "../../../assets/icons/logo.svg";
import Menu from "../../../assets/icons/menu.svg";

const HeaderComponent = () => {
  return (
    <Header>
      <Router>
        <picture>
          <source media="(min-width: 768px)" srcSet={Logo} />
          <img src={LogoMobile} alt="Logo - Peterson Simião" />
        </picture>

        <Nav>
          <ul>
            <li>
              <Link to="/">Skills</Link>
            </li>
            <li>
              <Link to="/experiencia">Experience</Link>
            </li>
            <li>
              <Link to="/projetos">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </Nav>

        <Button>
          <img src={Menu} alt="Icone menu hamburger" />
        </Button>
      </Router>
    </Header>
  );
};

export default HeaderComponent;
