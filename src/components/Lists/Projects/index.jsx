import CardInfo from "../../Cards/CardInfo/index";
import { List, Item, ButtonShowMore } from "./style";

function ListProjects() {
  return (
    <>
      <List>
        <Item>
          <CardInfo
            title="Sítio Sassafraz"
            description="Lorem ipsum"
            date="21/06/1999"
            thumb="https://user-images.githubusercontent.com/41239234/106675713-62146100-6594-11eb-840c-3dc63a157c20.png"
          />
        </Item>
        <Item large>
          <CardInfo
            title="Sítio Sassafraz"
            description="Lorem ipsum"
            date="21/06/1999"
            thumb="https://user-images.githubusercontent.com/41239234/106675713-62146100-6594-11eb-840c-3dc63a157c20.png"
          />
        </Item>
        <Item>
          <CardInfo
            title="Sítio Sassafraz"
            description="Lorem ipsum"
            date="21/06/1999"
            thumb="https://user-images.githubusercontent.com/41239234/106675713-62146100-6594-11eb-840c-3dc63a157c20.png"
          />
        </Item>
        <Item>
          <CardInfo
            title="Sítio Sassafraz"
            description="Lorem ipsum"
            date="21/06/1999"
            thumb="https://user-images.githubusercontent.com/41239234/106675713-62146100-6594-11eb-840c-3dc63a157c20.png"
          />
        </Item>
        <Item>
          <CardInfo
            title="Sítio Sassafraz"
            description="Lorem ipsum"
            date="21/06/1999"
            thumb="https://user-images.githubusercontent.com/41239234/106675713-62146100-6594-11eb-840c-3dc63a157c20.png"
          />
        </Item>
      </List>
      <ButtonShowMore block uppercase>
        Ver Todos
      </ButtonShowMore>
    </>
  );
}

export default ListProjects;
