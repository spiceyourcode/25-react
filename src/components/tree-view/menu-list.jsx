import MenuItem from "./menu-item";
import styles from './Tree-View.module.css';
function MenuList({ list=[] }) {
    return (
        <ul className={styles['list']}>
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