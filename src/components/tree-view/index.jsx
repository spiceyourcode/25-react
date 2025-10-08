import MenuList from "./menu-list";
import styles from './Tree-View.module.css'

function TreeView({ menus = [] }) {
    return (
        <div className={styles['menu-container']}>
            <MenuList list={menus} />
        </div>
    );
}

export default TreeView;
