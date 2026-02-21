/* eslint-disable no-undef */
import { useEffect, useState } from "react";

function ScrollIndicator() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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
  useEffect(() => {
    fetchData(url);
  });
}

export default ScrollIndicator;
