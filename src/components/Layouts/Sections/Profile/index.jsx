import CardProfile from "../../../Cards/CardProfile/index";
import { Section, Title } from "./style";

function SectionProfile(params) {
  return (
    <Section>
      <Title>
        Olá,
        <br />
        meu nome é <strong>Peterson F. Simião</strong>
        Desenvolvedor Front-end
      </Title>
      <CardProfile />
    </Section>
  );
}

export default SectionProfile;
