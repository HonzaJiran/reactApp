import React, { Component } from 'react';

export class MinerFetch extends React.Component {
  constructor(props) {
    console.log(props.token);
    super(props);
    this.state = {
      miner : {}
    }
    //this.getMiner(props.token)
  }
  
  getMiner(token){
    console.log(token);
      fetch('http://192.168.0.199:7000/api/v1/miner/', {
        method: 'get',
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'JWT ' + token
      }
      })
      .then(response => { 
        return response.json()
      })
      .then(data => {
        this.setState({ "miner" : data })
        console.log(this.state.miner)
        return "Tohle je super";
      })
      .catch(err => {
          console.log("fetch error" + err);
      });
  }
  
  render(){
    return(
      <div>
        <h1>Tohle je token: {this.props.token}</h1>
      </div>  
    );  
  }

}

export default MinerFetch;
