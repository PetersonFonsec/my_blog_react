import SkillsCarousel from "../../../Carousels/Skills";
import { Section, Titile, Wrapper, CarouselContainer } from "./styled";

function SectionSkills() {
  return (
    <Section>
      <Wrapper>
        <CarouselContainer>
          <Titile>Skills</Titile>
          <SkillsCarousel />
        </CarouselContainer>
      </Wrapper>
    </Section>
  );
}

export default SectionSkills;
