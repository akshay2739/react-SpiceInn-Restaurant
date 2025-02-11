import React, { Component }  from 'react';
import './App.css';
import Dashboard from './components/Dashboard'



class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    
    return (
      <Dashboard />
    ); 
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}


export default App;
