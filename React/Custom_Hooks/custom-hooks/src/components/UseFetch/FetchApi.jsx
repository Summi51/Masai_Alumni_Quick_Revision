
// 1. useFetch
// Problem Statement: Create a custom hook useFetch that takes a URL as input and returns the fetched data, l
// oading state, and any error that occurred during the fetch operation. 
// Implement features like automatic retries and caching of data.


import { useFetch } from "./useFetch"


function FetchApi(){

    const [data, loading, error]  = useFetch("https://jsonplaceholder.typicode.com/todos")
   
    return loading ? (<h2>Loading..</h2>) : error ? (<h2>Something Went Wrong..</h2>) : (
    <div>
       {
      data.map((item)=>
        {
            return   <li key={item.id}>{item.title}</li>
        })
        }
     </div>
          
    )
}

export default FetchApi


