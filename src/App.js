import { useState } from 'react';
import './App.css';


function Button({ className, value, onSquareClick }) {//or i can use (props)
  return (
    <button value={value} className={className} onClick={() => onSquareClick(value)}>{value}</button>
  )
}
export default function Calculator() {
  const [inputValue, setInputValue] = useState('');
  const [previousValue, setPreviousValue] = useState(''); // Store previous expression for chaining

  function handleClick(value) {
    if(value==="x"){
      if(previousValue !== ""){
        setInputValue(previousValue +" * ");
      }
      else{
        setInputValue(inputValue+" * ");
      }
      return;
    }
    if(value==="-"){
      if(previousValue !== ""){
        setInputValue(previousValue + " - ");
      }
      else{
        setInputValue(inputValue+" - ");
      }
      return;
    }
    if(value==="+"){
      if(previousValue !== ""){
        setInputValue(previousValue + " + ");
      }
      else{
        setInputValue(inputValue+" + ");
      }
      return;
    }
    if(value==="/"){
      if(previousValue !== ""){
        setInputValue(previousValue + " / ");
      }
      else{
        setInputValue(inputValue+" / ");
      }
      return;
    }
    if(value==="C"){
      setInputValue("");
      setPreviousValue("");
      return;
    }
    
    if (value === "=") {
      let result = eval(inputValue); // Using eval with caution
      setInputValue(inputValue + " = " + result);
      setPreviousValue(result);
      return;
    }else{
      setInputValue(inputValue + value);
    }
  }
  return (
    <>
      <div className="calculator">
        <input type="text" value={inputValue}/>
        <div>
          <Button value={1} onSquareClick={handleClick}/>
          <Button value={2} onSquareClick={handleClick}/>
          <Button value={3} onSquareClick={handleClick}/>
          <Button className="operator" value={"/"} onSquareClick={handleClick}/>
        
          <Button value={4} onSquareClick={handleClick}/>
          <Button value={5} onSquareClick={handleClick}/>
          <Button value={6} onSquareClick={handleClick}/>
          <Button className="operator" value={"x"} onSquareClick={handleClick}/>
        </div>
        <div>
          <Button value={7} onSquareClick={handleClick}/>
          <Button value={8} onSquareClick={handleClick}/>
          <Button value={9} onSquareClick={handleClick}/>
          <Button className="operator" value={"-"} onSquareClick={handleClick}/>
        </div>
        <div>
          <Button value={"C"} onSquareClick={handleClick}/>
          <Button value={0} onSquareClick={handleClick}/>
          <Button value={"="} onSquareClick={handleClick}/>
          <Button className="operator" value={"+"} onSquareClick={handleClick}/>
        </div>
      </div>
    </>
  );
}