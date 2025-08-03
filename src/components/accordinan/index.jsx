import { useState } from "react";
import data from "./data.js";
import "./styles.css";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    // using the spread operator to copy the array
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    // checks wheather the item is in the array 
    // indexOf method return a -1 when the value is not found in the specified array 
    if (findIndexOfCurrentId === -1) { 
        // add the item in the array if it not found
      cpyMultiple.push(getCurrentId);
    } else {
        // remove the item from the array if it is found
        // remove one item in the indexOfCurrentId position
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <div className="controls">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          {enableMultiSelection ? "Disable" : "Enable"} multiple selection
        </button>
      </div>

      <div className="accordion">
        {/* checking if the data exists and its has some content */}
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="dataitem" key={dataItem.id}>
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultipleSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3 className="header">{dataItem.question}</h3>
                <span className="plus">
                  {enableMultiSelection
                    ? multiple.includes(dataItem.id)
                      ? "-"
                      : "+"
                    : selected === dataItem.id
                    ? "-"
                    : "+"}
                </span>
              </div>

              <div className="answer">
                {enableMultiSelection
                  ? multiple.includes(dataItem.id) && (
                      <div>{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && <div>{dataItem.answer}</div>}
              </div>
            </div>
          ))
        ) : (
          <div>No data item found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
