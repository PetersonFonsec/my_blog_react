import Socials from "../../Socials";
import { Avatar, Card, Description, DownloadButton } from "./style";

function CardProfile(params) {
  return (
    <Card>
      <Avatar
        src="https://dummyimage.com/600x400/000/fff"
        alt="Foto de perfil"
      />

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
