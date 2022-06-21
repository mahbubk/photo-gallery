import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main';
import myStore from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
