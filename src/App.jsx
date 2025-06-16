import Screen from "./Screen";
import Buttons from "./Buttons";
function App() {
  const text = "0"; 
  /*function buttonClick(number) {
    setText(text + number);*/
    
  
  return (
    <>
       <h1>Calculator</h1>
       <div className="container">
          <Screen text = {text} />
          <Buttons text = {text} />
       </div>
    </>
  )
}



export default App
