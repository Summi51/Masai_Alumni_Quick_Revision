import logo from './logo.svg';
import './App.css';
import FetchApi from './components/UseFetch/FetchApi';
import Search from './components/UseDebounce/Search';

function App() {
  return (
    <div className="App">
      {/* <FetchApi/> */}
      <Search/>
    </div>
  );
}

export default App;
