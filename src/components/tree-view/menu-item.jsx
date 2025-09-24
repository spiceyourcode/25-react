
import MenuList from "./menu-list";

function MenuItem({item}){
    return(
      <li>
        {item.title}
        {item.subMenu && item.subMenu.length > 0 && (
          <MenuList list={item.subMenu} />
        )}
      </li>
    )
}

export default MenuItem;