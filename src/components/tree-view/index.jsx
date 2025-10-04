import MenuList from "./menu-list";

function TreeView({ menus = [] }) {
    return (
        <div className="menu-container">
            <MenuList list={menus} />
        </div>
    );
}

export default TreeView;
