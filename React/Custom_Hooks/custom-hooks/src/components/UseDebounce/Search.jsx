import { useRef, useState } from "react";
import { useDebounce } from "./useDebounce";

function Search() {
  
const {change, debounce} = useDebounce()
  return (
    <div>
      <input value={change} onChange={debounce} type="text" />
    </div>
  );
}

export default Search;
