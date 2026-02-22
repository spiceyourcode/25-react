/* eslint-disable no-undef */
import { useEffect, useState } from "react";

function ScrollIndicator() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercantage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    // fetch the data
    try {
      const response = await fetch(getUrl);
      const data = await response.json();
      setLoading(false);
      // log the data into the console
      console.log(data);
    } catch (e) {
      setErrorMessage(e.message);
      console.log(errorMessage);
      setLoading(false);
    }

    if (data && data.products && data.length > 0) {
      setData(data.product);
    }
  }
  function handleScrolPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrillTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight,
    );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }
  useEffect(() => {
    fetchData(url);
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScrolPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  console.log(data, scrollPercantage);

  if(errorMessage){
    return <div> Error! {errorMessage} </div>
  }
  if(loading){
    return <div>Loading please waits...</div>
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercantage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
