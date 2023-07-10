import React from 'react';
import './App.css';
import {Button} from './components/General/Button';

function App() {
  return (
    <div className="App">
      <Button handler={() => console.log('Clicked')} text="Button" />
    </div>
  );
}

export default App;
