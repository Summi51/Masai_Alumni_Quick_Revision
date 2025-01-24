import logo from './logo.svg';
import './App.css';
import FetchApi from './components/UseFetch/FetchApi';
import Search from './components/UseDebounce/Search';
import SizeWindow from './components/UseWindowSize/SizeWindow';
import Storage from './components/UseLocalStorage/Storage';
import ClickOutside from './components/UseOnClickOutside/ClickOutside';
function App() {
  return (
    <div className="App">
      {/* <FetchApi/> */}
      {/* <Search/> */}
      {/* <SizeWindow/> */}
      {/* <Storage /> */}
      <ClickOutside />
    </div>
  );
}

export default App;
