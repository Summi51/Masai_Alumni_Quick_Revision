import logo from './logo.svg';
import './App.css';
import FetchApi from './components/UseFetch/FetchApi';
import Search from './components/UseDebounce/Search';
import SizeWindow from './components/UseWindowSize/SizeWindow';
import Storage from './components/UseLocalStorage/Storage';
function App() {
  return (
    <div className="App">
      {/* <FetchApi/> */}
      {/* <Search/> */}
      {/* <SizeWindow/> */}
      <Storage />
    </div>
  );
}

export default App;
