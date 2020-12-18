import React, {useRef, useCallback} from 'react';
import {useHistory} from 'react-router-dom';



export default function SearchForm() {
  const inputSearch = useRef();
  const history = useHistory();

  const handleOnClick = useCallback(() => {
    console.log(inputSearch);//TEST
    console.log(inputSearch.current.value);//TEST
    history.push('/search?q=' + encodeURIComponent(inputSearch.current.value));
  }, [history]);


  return (
    <>
      <input
        ref = {inputSearch}
        type='search'
        placeholder='Search'
      />
      <button onClick={handleOnClick}>Search</button>
        {/* <Link to="/search"></Link> */}
    </>
  );
}