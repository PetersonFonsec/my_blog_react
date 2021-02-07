import IconeGithub from "../../assets/icons/github.svg";
import IconeLinkedin from "../../assets/icons/linkedin.svg";
import IconeInstagram from "../../assets/icons/instagram.svg";
import Icone from "../../assets/icons/whatsapp.svg";
import { List, Item } from "./style";

function Socials() {
  return (
    <List>
      <Item invert>
        <a href="https://google.com.br" target="_blank" rel="noreferrer">
          <img src={IconeGithub} alt="Link para o meu GitHub" />
        </a>
      </Item>
      <Item>
        <a href="https://google.com.br" target="_blank" rel="noreferrer">
          <img src={IconeLinkedin} alt="Link para o meu linkedin" />
        </a>
      </Item>
      <Item>
        <a href="https://google.com.br" target="_blank" rel="noreferrer">
          <img src={IconeInstagram} alt="Link para o meu Instagran" />
        </a>
      </Item>
      <Item>
        <a href="https://google.com.br" target="_blank" rel="noreferrer">
          <img src={Icone} alt="Link para o meu Whatsapp" />
        </a>
      </Item>
    </List>
  );
}

export default Socials;
