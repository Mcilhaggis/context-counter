import React from 'react';
import './App.css';
import CounterProvider from './js/CountContext';
import Counter from './js/Counter'

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