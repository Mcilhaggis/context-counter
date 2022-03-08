import React from 'react';
import './App.css';
import CounterProvider from './js/CountContext';
import Counter from './js/Counter'



function App() {
  return (
    // Strict mode will highlight potential problems with the project
    // <React.StrictMode>
    <div className="App">
      <CounterProvider>
        {console.log(CounterProvider)}
        <Counter />
        {/* <p>test</p> */}
      </CounterProvider>
    </div>
    // </React.StrictMode>

  );
}

export default App;
