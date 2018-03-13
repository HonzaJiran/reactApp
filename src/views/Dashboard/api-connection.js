import React from 'react';

var obj = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'client_id': '(API KEY)',
    'client_secret': '(API SECRET)',
    'grant_type': 'client_credentials'
  })
}

  class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://192.168.0.199:7000/api-auth/", obj)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          }
        );

        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
      console.log(items);
    }

}

export default Api;
