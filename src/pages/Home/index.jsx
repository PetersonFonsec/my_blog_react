import SectionProfile from "../../components/Layouts/Sections/Profile";
import SectionSkills from "../../components/Layouts/Sections/Skills";
import SectionProjects from "../../components/Layouts/Sections/Projects";
import AsideComponent from "../../components/Layouts/Aside";

import { Main } from "./style";

function Home() {
  return (
    <>
      <Main>
        <AsideComponent>
          <SectionProfile />
          <SectionSkills />
        </AsideComponent>
        <SectionProjects />
      </Main>
    </>
  );
}

export default Home;
