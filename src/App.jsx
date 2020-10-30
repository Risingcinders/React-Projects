import './App.css';

import Boxdiv from './components/boxdiv'
import Picker from './components/picker'
import { useState } from 'react';



function App() {
  const [ boxArr, setBoxArr ] = useState([])

  const colorUpdate = ( freshColor ) => {
    setBoxArr([...boxArr, freshColor ])
  }

  const boxLoop = () => {
    var boxes = []
    for (var i = 0; i < boxArr.length; i++) {
      boxes.push(<Boxdiv key={ "boxnumber" + i } incomingColor={ boxArr[i] } />)
    }
    return boxes

  }

  return (
    <div className="App">
      <Picker whenSubmitted={ colorUpdate  } />
      <div id="boxland">
        { boxLoop() }
      </div>
    </div>
  );
}

export default App;
