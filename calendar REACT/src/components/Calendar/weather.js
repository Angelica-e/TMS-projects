import React from 'react';
import axios from 'axios';


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      searchQuery: 'Barcelona'
    }
  }


  componentDidMount() {
    this.getWeather()
  }


  getWeather = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=332e49a54abb470ab0c182855210604&q=${this.state.searchQuery}&api=no`).then((responce) => {
      this.setState((prevState) =>
      ({
        data: {
          'feelslike_c': responce.data.current.feelslike_c,
          'temp_c': responce.data.current.temp_c,
          'conditionText': responce.data.current.condition.text,
          'icon': responce.data.current.condition.icon
        }
      }))
    })
  }


  handlerSearch = () => {
    this.getWeather()
  }
  

  handlerChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  }


  render() {
    return <div className="weatherWrap">
      <input value={this.state.searchQuery} onChange={this.handlerChange}></input><button onClick={this.handlerSearch}>Поиск</button>
      <br></br>
      <img src={this.state.data.icon} />
      <div><span>Температура: </span>{this.state.data.temp_c}<span>°C</span></div>
      <div><span>Ощущается как: </span>{this.state.data.feelslike_c}<span>°C</span></div>
      <div><span>Краткое описание: </span>{this.state.data.conditionText}</div>
    </div>

  }
}

export default Weather;
