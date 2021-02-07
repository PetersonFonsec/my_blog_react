import SkillsCarousel from "../../../Carousels/Skills";
import { Section, Title, Wrapper, CarouselContainer } from "./styled";

function SectionSkills() {
  return (
    <Section>
      <Wrapper>
        <CarouselContainer>
          <Title>Skills</Title>
          <SkillsCarousel />
        </CarouselContainer>
      </Wrapper>
    </Section>
  );
}

export default SectionSkills;
