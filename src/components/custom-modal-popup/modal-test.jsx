import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

function Modaltest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
    console.log(showModalPopup);
  }
  const onClose = () => {
    setShowModalPopup(false);
  };
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal 
        onClose={onClose} 
        body={<div >This is our custom body</div>}
        header={<div>This is our custom header</div>}
        footer={<div>This is our custom footer</div>}
        />
      )}
    </div>
  );
}

export default Modaltest;
