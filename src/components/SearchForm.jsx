import React, {useRef, useCallback} from 'react';
import {useHistory} from 'react-router-dom';


export default function SearchForm() {
  const inputSearch = useRef();
  const history = useHistory();

  const handleOnClick = useCallback((event) => {
    console.log(inputSearch.current.value);//TEST
    history.push('/search?q=' + encodeURIComponent(inputSearch.current.value));
    event.preventDefault();
  }, [history]);

  return (
    <form onSubmit={handleOnClick} method="get" action="/search">
      <input
        ref={inputSearch}
        name="q"
        type="search"
        placeholder="Search crypto..."
      />
      <button type="submit">🔍</button>
    </form>
  );
}