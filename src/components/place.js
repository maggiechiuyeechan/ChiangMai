import React, { Component } from 'react';
import Dialog from './dialog.js';

class Place extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.placeData,
      isDialogHidden: false,
    }

    this.onClose = this.onClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log("clicked");
    this.setState({isDialogHidden:true});
  }

  onClose(e){
    this.setState({isDialogHidden:false});
  }

  render(){

    const isHidden = this.state.isDialogHidden ? "shown":"hidden";

    return (

      <div className="place--container" 
      onMouseEnter={(i)=>this.props.onMouseEnter(i)} 
      id={isHidden}
      style={ { backgroundImage: `url(${require(`../images/${this.state.value.day}/header.jpg`)})`} }>

   
      { this.state.isDialogHidden ? null : <button className="seeDetails" onClick={this.handleClick}><h2>See details</h2></button> }

      

      { this.state.isDialogHidden ? <Dialog placeData={this.state.value} close={this.onClose}/> : null }

      { this.state.isDialogHidden ? <div className="overlay"></div> : null }
      </div>
    )
  }
}

export default Place;
