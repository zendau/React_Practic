import './App.css';
import Counter from './components/counter';

import React, {useState} from "react"

export const Status =  React.createContext()

function App() {

  const [valStatus, setValStatus] = useState(false)

  return (
    <div className="App">
      <Status.Provider value={valStatus}>
        <Counter></Counter>
      </Status.Provider>
     
    </div>
  );
}

export default App;
