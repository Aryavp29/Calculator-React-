import React, { useState } from 'react';
const Buttons = ({ text,setText }) => {
    function buttonClick(value) {
        setText(prev => prev + value)
    }
    function calculate(){
        try{
            const result = eval(text)
            setText(result.toString())
        }catch{
            setText("Error")
        }
    }
    function clear(){
        setText("")
    }
    return(
        <>
            <div className="btns">
                <button onClick = {() => buttonClick("7")}>7</button>
                <button onClick = {() => buttonClick("8")}>8</button>
                <button onClick={() => buttonClick("9")}>9</button>
                <button onClick={() => buttonClick("4")}>4</button>
                <button onClick={() => buttonClick("5")}>5</button>
                <button onClick={() => buttonClick("6")}>6</button>
                <button onClick={() => buttonClick("1")}>1</button>
                <button onClick={() => buttonClick("2")}>2</button>
                <button onClick={() => buttonClick("3")}>3</button>
                <button onClick={clear}>C</button>
                <button onClick={() => buttonClick("00")}>00</button>
                <button onClick={() => buttonClick("0")}>0</button>
                <button onClick={() => buttonClick("*")}>*</button>
                <button onClick={() => buttonClick("-")}>-</button>
                <button onClick={() => buttonClick("/")}>/</button>
                <button onClick={() => buttonClick(".")}>.</button>
                <button onClick={calculate}>=</button>
                <button onClick={() => buttonClick("+")}>+</button>    
            </div>
        </>
    )
}
export default Buttons