import React, {useRef} from 'react';


export default function SearchResult() {
  const inputSearch = useRef();

  function handleOnClick() {
    console.log(inputSearch);//TEST
    console.log(inputSearch.current.value);//TEST
  }

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