import SectionProfile from "../../components/Layouts/Sections/Profile";
import SectionSkills from "../../components/Layouts/Sections/Skills";
import SectionProjects from "../../components/Layouts/Sections/Projects";

function Home() {
  return (
    <>
      <SectionProfile />
      <SectionSkills />
      <SectionProjects />
    </>
  );
}

export default Home;