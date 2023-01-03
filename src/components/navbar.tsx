import { menus } from "../menuItems/menuItems";
import { A, Div, Li, Ul } from "../styledComponents/header";

export default function Navbar() {
  return (
    <Div>
      <img
        src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png"
        alt=""
      />
      <Ul>
        {menus.map((menu, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Li key={index}><A href="#">{menu.title}</A></Li>
        ))}
      </Ul>
    </Div>
  );
}
