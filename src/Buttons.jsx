import { useState } from "react"
const Buttons = ({ text }) => { 
    /*function clear(){
        document.getElementById('screenid').value = "";
    }
    function calculator(){
    var value=document.getElementById('screenid').value;
    try{
    document.getElementById('screenid').value=eval(value);
    }
    catch{
        document.getElementById('screenid').value="Error";
    }
}*/
    return(
        <>
            <div className="btns">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>C</button>
                <button>00</button>
                <button>0</button>
                <button>*</button>
                <button>-</button>
                <button>/</button>
                <button>.</button>
                <button>=</button>
                <button>+</button>    
            </div>
        </>
    )
}
export default Buttons