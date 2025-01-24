
// 2. useLocalStorage
// Problem Statement: Create a custom hook useLocalStorage that allows saving and retrieving values from 
// the browser's local storage. The hook should support setting default values and automatically parse/serialize 
// JSON objects.


import useLocalStorage from "./useLocalStorage";

function Storage (){
    const [name, setName] = useLocalStorage("name", "Value");
    return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("Value")}>Reset</button>
    </div>
    )
}

export default Storage