import { useSelector, useDispatch } from 'react-redux';

import reactLogo from './assets/react.svg';
import './App.css';
import { increment, incrementBy, decrement } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is { counter }</h1>
      <p>
        <button onClick={() => dispatch( increment() )}>
          Increment
        </button>
        <button onClick={() => dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={(state) => dispatch( incrementBy(2) )}>
          Increment by 2
        </button>
        </p>
    </div>
  )
}

export default App
