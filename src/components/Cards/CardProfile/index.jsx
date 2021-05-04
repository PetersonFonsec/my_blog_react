import Socials from "../../Socials";

import photoProfile from "../../../assets/perfil.jpg";
import { Avatar, Card, Description, DownloadButton } from "./style";

function CardProfile(params) {
  return (
    <Card>
      <Avatar src={photoProfile} alt="Peterson F. Simião" />

      <Description>
        Peterson F. Simião
        <br /> Front-end developer
      </Description>

      <DownloadButton primary block>
        Baixar CV
      </DownloadButton>

      <Socials />
    </Card>
  );
}

export default CardProfile;
