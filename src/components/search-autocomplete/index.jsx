import React, { useState, useEffect, useRef } from 'react';

const SearchAutocomplete = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Ref to hold the AbortController for cancelling stale requests
  const abortControllerRef = useRef(null);

  useEffect(() => {
    // If the query is empty, clear results and do nothing
    if (!query.trim()) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    // Debounce: Wait 300ms after user stops typing before fetching
    const timer = setTimeout(() => {
      fetchUsers(query);
    }, 300);

    // Cleanup: Clear the timer if the user types again before 300ms
    return () => clearTimeout(timer);
  }, [query]);

  const fetchUsers = async (searchTerm) => {
    // Cancel any previous request that is still in flight
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create a new controller for this request
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setLoading(true);
    setShowDropdown(true);

    try {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${encodeURIComponent(searchTerm)}`,
        { signal: controller.signal }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();

      // DummyJSON returns { users: [...], total, skip, limit }
      const userList = data.users || [];

      // Map to a simple format for display
      const formattedSuggestions = userList.map((user) => ({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        image: user.image,
      }));

      setSuggestions(formattedSuggestions);
    } catch (error) {
      // Ignore AbortError (expected when a new request cancels the old one)
      if (error.name === 'AbortError') {
        return;
      }
      console.error('Error fetching users:', error);
      setSuggestions([]);
    } finally {
      // Only set loading to false if this request wasn't aborted
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name);
    setShowDropdown(false);
    // You can add additional logic here (e.g., navigate, select user)
    console.log('Selected user:', suggestion);
  };

  const handleBlur = () => {
    // Delay hiding the dropdown so click events on suggestions can register
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const handleFocus = () => {
    if (suggestions.length > 0 && query.trim()) {
      setShowDropdown(true);
    }
  };

  return (
    <div style={{ position: 'relative', width: '400px', margin: '2rem auto' }}>
      <label htmlFor="user-search" style={{ display: 'block', marginBottom: '8px' }}>
        Search Users
      </label>
      <input
        id="user-search"
        type="text"
        value={query}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="Type a user name..."
        autoComplete="off"
        style={{
          width: '100%',
          padding: '10px 12px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          boxSizing: 'border-box',
        }}
      />

      {loading && (
        <div style={{ position: 'absolute', right: '12px', top: '42px', fontSize: '12px', color: '#888' }}>
          Loading...
        </div>
      )}

      {showDropdown && suggestions.length > 0 && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '0 0 6px 6px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            maxHeight: '300px',
            overflowY: 'auto',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onMouseDown={() => handleSuggestionClick(suggestion)}
              style={{
                padding: '10px 12px',
                cursor: 'pointer',
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <img
                src={suggestion.image}
                alt=""
                style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontWeight: 500 }}>{suggestion.name}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>{suggestion.email}</div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {showDropdown && !loading && query.trim() && suggestions.length === 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            padding: '12px',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '0 0 6px 6px',
            color: '#888',
            textAlign: 'center',
            zIndex: 1000,
          }}
        >
          No users found
        </div>
      )}
    </div>
  );
};

export default SearchAutocomplete;