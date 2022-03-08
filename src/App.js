import React from 'react';
import './App.css';
import ProviderComponent from './js/CountContext';
import Counter from './js/Counter'

function App() {


  return (
    <ProviderComponent>
      <div className="App">
        <Counter />
      </div>
    </ProviderComponent>
  );
}

export default App;
