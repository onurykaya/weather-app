import React from 'react';
import Weather from './components/Weather'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Form from './components/Form';

const API_key = "32cf1c71bc6fe385ef7a82a58ddee35b";
//api.openweathermap.org/data/2.5/weather?q=London,uk

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      city: undefined,
      country: undefined,
      temp: undefined,
      temp_min: undefined,
      temp_max: undefined,
      description: undefined,
      icon: undefined,
      error: false,
      visible: false
    };
    this.icon = {
      Thunderstrom: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  getIcon(icons, rangeId){
    switch(true){
      case rangeId >= 200 && rangeId <=232:
        this.setState({
          icon: this.icon.Thunderstrom
        })
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({
          icon: this.icon.Drizzle
        })
      break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({
          icon: this.icon.Rain
        })
      break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({
          icon: this.icon.Snow
        })
      break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({
          icon: this.icon.Atmosphere
        })
      break;
      case rangeId === 800:
        this.setState({
          icon: this.icon.Clear
        })
      break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({
          icon: this.icon.Clouds
        })
      break;
      default:
        this.setState({
          icon: this.icon.Clouds
        })
      
    }
  }

  getWeather = async (e) =>{
   e.preventDefault();
   const city = e.target.elements.city.value;
   const country = e.target.elements.country.value;
    if(city && country){

      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);

      const response = await api_call.json();

      this.setState({
        city: `${response.name} ${response.sys.country}`,
        temp: response.main.temp,
        temp_min: response.main.temp_min,
        temp_max: response.main.temp_max,
        description: response.weather[0].description,
        visible: true
      })
      console.log(response)
      this.getIcon(this.icon, response.weather[0].id)
    }else{
      return (
        this.setState({
          error: true
        })
      );
    }
  }

  render() {
    return(
      <div className="App">
      <Form error = {this.state.error} submitWeather={this.getWeather} />
      <Weather  visible={this.state.visible} icon={this.state.icon} city={this.state.city} country={this.state.country} temp={this.state.temp} temp_min = {this.state.temp_min} temp_max={this.state.temp_max} description= {this.state.description} />
    </div>
    );
  }
}



export default App;
