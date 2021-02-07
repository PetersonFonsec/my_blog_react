import FormSearch from "../../../Forms/Search";
import ListProjects from "../../../Lists/Projects";

import { Section, Wrapper, Title } from "./style";

function SectionProjects() {
  return (
    <>
      <Section>
        <Wrapper>
          <Title>My Projects</Title>
          <ListProjects />
        </Wrapper>
      </Section>
    </>
  );
}

export default SectionProjects;
