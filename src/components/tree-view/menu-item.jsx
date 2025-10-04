import { useState } from "react";
import MenuList from "./menu-list";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentTitle) => {
    return () => {
      setDisplayCurrentChildren(prevState => ({
        ...prevState,
        [getCurrentTitle]: !prevState[getCurrentTitle]
      }));
    };
  };

  return (
    <li>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <p>
          {item.title}
          {item.subMenu && item.subMenu.length > 0 && (
            <span 
              onClick={handleToggleChildren(item.title)}
              style={{ cursor: "pointer", marginLeft: "8px" }}
            >
              {displayCurrentChildren[item.title] ? "−" : "+"}
            </span>
          )}
        </p>
      </div>
      
      {item.subMenu && 
       item.subMenu.length > 0 && 
       displayCurrentChildren[item.title] && (
        <MenuList list={item.subMenu} />
      )}
    </li>
  );
}

export default MenuItem;