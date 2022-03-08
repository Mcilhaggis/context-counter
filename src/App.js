import React from 'react';
import CounterProvider from './js/CountContext';
import Counter from './js/Counter'
import './css/style.scss';

export default function App() {
  return (
    // Strict mode will highlight potential problems with the project
    <React.StrictMode>
      <div className="App">
        <CounterProvider>
          <Counter />
        </CounterProvider>
      </div>
    </React.StrictMode>

  );
}