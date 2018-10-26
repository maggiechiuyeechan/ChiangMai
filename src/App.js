import React, { Component } from 'react';
import './App.css';
import placeData from './Data.js';
import Place from './components/place.js';
import Dialog from './components/dialog.js';

const defaultValue = { 
  day: "Five days in",
  name: "Chiang Mai"
}

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentValue: defaultValue,
    };
  }

  mouseEnter(i){
    this.setState({currentValue:i});
    console.log(i);
  }


  hidden(i){
    console.log(i);
  }
  renderPlace(i){
    return < Place 
    placeData={i} 
    onMouseEnter={() => this.mouseEnter(i)}
    
    />
  }
  
  render() {

    return (
      <div className="App">

        <div className="homeTextWrapper">
            <h3>Day {this.state.currentValue.day}</h3>
            <h1>{this.state.currentValue.name}</h1>
            <h2>Thailand</h2>
        </div>

          {this.renderPlace(placeData[0])}
          {this.renderPlace(placeData[1])}
          {this.renderPlace(placeData[2])}
          {this.renderPlace(placeData[3])}
          {this.renderPlace(placeData[4])}

      </div>
    );
  }
}

export default App;
