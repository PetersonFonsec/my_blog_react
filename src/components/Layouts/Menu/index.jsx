import { BrowserRouter as Router, Link } from "react-router-dom";
import { Menu, List, Item } from "./styled";

import Socials from "../../Socials/index";

function MenuComponent({ links, active, show }) {
  return (
    <Menu show={show}>
      <Router>
        <List role="menu">
          {links &&
            links.map(({ link, label }, i) => (
              <Item key={i} active={active === link} role="menuitem">
                <Link to={link}>{label}</Link>
              </Item>
            ))}
        </List>
      </Router>
      <Socials />
    </Menu>
  );
}

export default MenuComponent;
