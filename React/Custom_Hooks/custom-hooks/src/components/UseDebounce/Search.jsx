
// 3. useDebounce
// Problem Statement: Implement a useDebounce hook that delays the execution of a function until 
// after a specified wait time has passed since the last time the function was invoked. 
// This is useful for optimizing performance in search input fields.


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
