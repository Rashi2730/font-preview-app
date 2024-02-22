import { useState } from 'react';
import { Cards } from './components/Cards';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleFormInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <main className="container">
      <input
        className="input "
        type="text"
        placeholder="Type something to preview"
        value={inputValue}
        onChange={handleFormInput}
      />
      <Cards inputValue={inputValue} />
    </main>
  );
}

export default App;
