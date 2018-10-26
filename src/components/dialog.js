import React, { Component } from 'react';


class Dialog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.placeData,
      closeDialog: true
    }
  }

  render(){
    return (
      <div className="dialog">
        <button id="dialogCloseButton" onClick={this.props.close}>×</button>

        <div className="content-container">
          
          <div className="hero" 
            style={ { backgroundImage: `url(${require(`../images/${this.state.value.day}/hero.jpg`)})`} }></div>
          

          <div className="mainText-container">
              <div className="headerText-container">
                <h3>Day {this.state.value.day} itinerary</h3>
                <h1>{this.state.value.name}</h1>
              </div>
              
              <div className="contact-container">
                <p><span>Address:</span>{this.state.value.address}</p>
                <p><span>Phone:</span>{this.state.value.phone}</p>
                <p><span>Type:</span>{this.state.value.type}</p>
              </div>

              <div className="description-container">
                <p>{this.state.value.description}</p>
              </div>
          </div>

          <div className="images-container">
            <div className="image1" 
            style={ { backgroundImage: `url(${require(`../images/${this.state.value.day}/1.jpg`)})`} }></div>
            <div className="image2" 
            style={ { backgroundImage: `url(${require(`../images/${this.state.value.day}/2.jpg`)})`} }></div>
          </div>

          <div className="footer" 
            style={ { backgroundImage: `url(${require(`../images/${this.state.value.day}/footer.jpg`)})`} }></div>


        </div>

      </div>      
    )
  }
}

export default Dialog;





