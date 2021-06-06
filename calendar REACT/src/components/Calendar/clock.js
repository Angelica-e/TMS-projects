import React, {useState, useEffect } from 'react';

const Timer = ({size='small'}) => {
  const [timer, setTimer] = useState(new Date());

  useEffect(()=>{
    const intervalID = setInterval(() => tick(), 1000);

    return ( () => {
      clearInterval(intervalID)
    })

  }, [] )

  const tick = () => {
    setTimer(
       new Date(),
    );
  }
  return size === 'small' ?  <p> {timer.toLocaleTimeString()}</p> :
  <h1> {timer.toLocaleTimeString()}</h1> 
  ;
}

export default Timer;


// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date().toLocaleString(),
//     };
//   }
  
//   componentDidMount() {
//     this.intervalID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//    clearInterval(this.intervalID)
//   }

//   tick() {
//     this.setState({
//       time: new Date().toLocaleString(),
//     });
//   }

//   render() {
//     return <p className="App-clock">The time is {this.state.time}.</p>;
//   }
// }





