import { useState } from "react";

import Screen from "./Screen";
import Buttons from "./Buttons";

function App() {
  const [text,setText] = useState("0")
  return (
    <>
       <h1>Calculator</h1>
       <div className="container">
          <Screen text={text}  setText={setText}/>
          <Buttons text = {text}  setText={setText}/>
       </div>
    </>
  )
}

export default App
