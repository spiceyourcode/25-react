import { useEffect, useState } from "react";
import Suggestions from "./suggestions";
import styles from "./SearchAutoComplete.module.css";

function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  async function fetchListOfUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (error) {
      loading(false);
      console.log(error);
      setError(error);
    }
  }
  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className={styles['search-autocomplete-container']}>
      <input
        type="text"
        name="search-users"
        placeholder="search users .. "
        value={searchParam}
        onChange={handleChange}
      />
      {
        loading ? <div> Loading data! Please Wait</div> :
          showDropDown && <Suggestions data={filteredUsers} />
      }
    </div>
  );
}

export default SearchAutocomplete;
