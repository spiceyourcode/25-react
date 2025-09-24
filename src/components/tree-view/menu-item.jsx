
<<<<<<< HEAD
import MenuList from "./menu-list";

function MenuItem({item}){
    return(
      <li>
        {item.title}
        {item.subMenu && item.subMenu.length > 0 && (
          <MenuList list={item.subMenu} />
        )}
=======
function MenuItem({listItem}){
    return(
      <li>
        {listItem.title}
>>>>>>> fa5e20bd4926589b7df946534ddb43570c34fd9e
      </li>
    )
}

export default MenuItem;