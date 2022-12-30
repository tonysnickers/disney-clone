import { menus } from "../menuItems/menuItems";
import { Div, Li, Ul } from "../styledComponents/dropDownn";

export default function Navbar() {


  return (
    <Div>
      <img src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png" alt="" />
        <Ul>
          {menus.map((menu, index)=> (
            <Li key={index}>{menu.title}</Li>
          ))}
        </Ul>
    </Div>
  );
}
