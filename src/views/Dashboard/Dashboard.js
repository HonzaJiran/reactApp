import React, { Component } from 'react';
import { MinerFetch } from '../Miners/miners';

class Dashboard extends React.Component {
  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      token: "",
      showInputs: true,
      success: false
    };
    console.log(this.props);
   }

   handleSubmit(event){ 
    event.preventDefault();
    
    this.state.showInputs = false;
    //Auth
    return fetch('http://192.168.0.199:7000/api-auth/', {
     method: 'post',
     headers: {
       'Content-Type':'application/json'
     },
     body: JSON.stringify({
      "username": 'mmojzis',//this.username.value,
      "password": 'password55'//this.password.value
      })
      })
      .then(response => { 
        this.setState({'success' : response.ok})
        console.log(this.state.success)
        return response.json()
      })
      .then(data => {
        this.setState({'token': data.token})
        console.log(this.state.token)
      }
    ); 
  }

   render () {
     return(
       <div>
         <div className='input-group'>
           <form onSubmit={this.handleSubmit}>
               <input className='form-control' ref={(ref) => {this.username = ref}} style={{display: this.state.showInputs ? 'block' : 'none' }} placeholder="user name" type="text" name="username"/><br />
               <input className='form-control' ref={(ref) => {this.password = ref}} style={{display: this.state.showInputs ? 'block' : 'none' }} placeholder="password" type="password" name="password"/><br />
               <button id="btn" style={{display: this.state.showInputs ? 'block' : 'none' }} type="Submit">Start</button>
           </form>
         </div>
         {this.state.success && <MinerFetch token = {this.state.token} />}
       </div>      
    );
   } 
}

export default Dashboard;