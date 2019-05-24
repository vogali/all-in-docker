import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      dbResponse: ""
    };
  }

  componentDidMount() {
    this.callAPI();
    this.callDB();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p
            className="App-intro">
            { this.state.apiResponse }  
          </p>
          <p
            className="App-intro">
            { this.state.dbResponse }
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload
          </p>
        </header>
      </div>
    );
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then( res => res.text())
      .then(res => this.setState({
          apiResponse: res
        }));
  }

  callDB() {
     fetch("http://localhost:9000/testDB")
      .then(res => res.text())
      .then(res => this.setState({ dbResponse: res}))
      .catch(err => err);
  }
}

export default App;
