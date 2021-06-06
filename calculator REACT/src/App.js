import React from 'react';

// const generateArr = (a) => {
//   return Array.from({ length: a }, (_, k) => k);
// };

// let arrOfDigits = generateArr(10);
// const template = {
//   type: "",
//   value: ""
// }

// class Calculator extends React.Component {
//   state = {
//     arr: [
//     {value: 1, type: 'digit'}, 
//     {value: 0, type: 'digit'}, 
//     {value: '=', type: 'equals'}, 
//     {value: '+', type: 'action'}
//   ],
//   action: '',
//     inputValue: '',
//     pushedButton: []
//   };


//   handleClick = (item) => {
//     this.handleChangeInput(item.value);
//     item.type !== 'equals' ?
//     this.setState((prevState) => ({
//       pushedButton: prevState.pushedButton[prevState.pushedButton.length -1].type === 'digit' || item.type === 'digit' 
//       ? [prevState.pushedButton.length -1].value === 'digit' [...prevState.pushedButton, item],
//     })) 
//     : this.handleCalculate();
// };


// handleCalculate = () => {
// this.state.pushedButton.forEach((item, index, arr) => {
// if (item.type === 'action')  {
//   this.sum(arr[index - 1].value, arr[index + 1].value) 
// }
// })
// }


// sum = (value1, value2) => {

// }

//   handleChangeInput = (value) => {
// this.setState((prevState) => ({
// inputValue: `${prevState.inputValue}${value}`,
//   }));
// };


//   render(){
//     return (
//   <>
//       <input type="text" 
//       className="input" 
//       readOnly="readonly" 
//       value={this.state.inputValue} 
//       />
//       <div className="calculator-wrapper">
//       {this.state.arr.map((item, index) => {
//         return (
//         <input 
//         className="flex-item" 
//         type="button" 
//         onClick={()=>this.handleClick(item)}
//         key={index} 
//         value={item.value} 
//         />
//         );
//       })}
//     </div>
//     </>
//     );
//   };
// }

// export default Calculator;



// import React, {Component} from 'react';
import Button from './components/button';
import Keypad from './components/keypad';
import './App.css';
import Display from './components/display';


class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { data: '' }
  }

  calculate = () => {
    try {
      const result = eval(this.state.data);
      this.setState({ data: result });
    } catch (e) {
      this.setState({ data: 'error' })
    }
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value');
    switch (value) {
      case 'clear':
        this.setState({ data: '' });
        break;
      case 'equal':
        this.calculate();
        break;
      case 'DEL':
        this.setState({ data: this.state.data.toString().slice(0, -1)});
        break;
      default:
        this.setState({ data: this.state.data + value });
    }
  }
  render() {
    return (
      <div className="Calculator">
        <Display data={this.state.data} />
        <Keypad>
          <Button onClick={this.handleClick} label="AC" value="clear" />
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="0" value="0" />

          <Button onClick={this.handleClick} label="DEL" value="DEL" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="." value="." />

          <Button onClick={this.handleClick} label="%" value="%" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="3" value="3" />
          

          <Button onClick={this.handleClick} label="/" value="/" />
          <Button onClick={this.handleClick} label="*" value="*" />
          <Button onClick={this.handleClick} label="-" value="-" />
          <Button onClick={this.handleClick} label="+" value="+" />
          <Button onClick={this.handleClick} label="=" size="1" value="equal" />
        </Keypad>
      </div>
    );
  }
}

export default Calculator;
