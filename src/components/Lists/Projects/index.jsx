import CardInfo from "../../Cards/CardInfo/index";
import { List, Item, ButtonShowMore } from "./style";

const Projects = Array(5).fill({
  title: "Sítio Sassafraz",
  description: "Lorem ipsum",
  date: "21/06/1999",
  thumb:
    "https://user-images.githubusercontent.com/41239234/106675713-62146100-6594-11eb-840c-3dc63a157c20.png",
});

function ListProjects() {
  return (
    <>
      <List>
        {Projects.map((project, i) => (
          <Item key={i}>
            <CardInfo {...project} />
          </Item>
        ))}
      </List>
      <ButtonShowMore block uppercase>
        Ver Todos
      </ButtonShowMore>
    </>
  );
}

export default ListProjects;
