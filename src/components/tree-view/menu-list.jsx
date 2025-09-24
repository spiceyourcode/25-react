import MenuItem from "./menu-item";

function MenuList({ list = [] }) {
    return (
        <ul>
        {list && list.length
            ? list.map((listItem, index) =>
            <MenuItem key={index} item = {listItem}/>
            )
            : null
        }
        </ul>
    );
}

export default MenuList;