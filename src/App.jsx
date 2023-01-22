import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from 'nav/Header';
import Counter from './Counter';
import './index.scss';

const App = () => {
  const [count, setCount] = useState(0);

  const handleBtn = useCallback(() => {
    setCount(count => count + 1);
  }, [setCount]);

  const setClear = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl border-2 p-2">
      <div>Name: mf-host-simple-counter</div>
      <Header count={count} onClear={setClear} />
      <Counter count={count} handleBtn={handleBtn} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app-host'));
