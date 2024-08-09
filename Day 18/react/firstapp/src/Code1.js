import './App.css';
import React from 'react';
class App extends React.Component{
render(){
    return(<div>
      <p>Hi i am from {this.props.name}</p>
      <p>first app</p>
      </div>)

  }
}
  export default App;