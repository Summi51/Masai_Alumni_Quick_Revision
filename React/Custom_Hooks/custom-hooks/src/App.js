import logo from './logo.svg';
import './App.css';
import FetchApi from './components/UseFetch/FetchApi';
import Search from './components/UseDebounce/Search';
import SizeWindow from './components/UseWindowSize/SizeWindow';

function App() {
  return (
    <div className="App">
      {/* <FetchApi/> */}
      {/* <Search/> */}
      <SizeWindow/>
    </div>
  );
}

export default App;
