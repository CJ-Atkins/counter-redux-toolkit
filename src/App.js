import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Search, Results } from './containers';
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {
  const apiKey = '0d853fc444024e038f0d01d8bbb2e0a7';

  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      {/* <Search />
      <Results /> */}

      <h1> The Count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}></button>
    </div>
  );
}

export default App;
