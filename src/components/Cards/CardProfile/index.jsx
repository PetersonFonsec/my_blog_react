import Socials from "../../Socials";

import photoProfile from "../../../assets/perfil.jpg";
import CV from "../../../assets/Curriculo-Peterson.pdf";
import { Avatar, Card, Description, DownloadButton } from "./style";

function CardProfile(params) {
  return (
    <Card>
      <Avatar src={photoProfile} alt="Peterson F. Simião" />

      <Description>
        Peterson F. Simião
        <br /> Front-end developer
      </Description>

      <DownloadButton as="a" href={CV} download primary block>
        Baixar CV
      </DownloadButton>

      <Socials />
    </Card>
  );
}

export default CardProfile;
