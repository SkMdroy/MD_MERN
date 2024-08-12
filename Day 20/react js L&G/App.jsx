import React, { Component } from 'react';
import './index.css';

class Fruits extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
        <LoginForm />
        <RegisterForm />
      </div>
    );
  }
}

class LoginForm extends Component {
  render() {
    return (
      <form id="loginForm">
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
        <div style={{ display: 'grid', justifyContent: 'space-evenly', border: '10px', padding: '10px 30px 10px 35px' }}>
          <div style={{ borderStyle: 'ridge', padding: '40px' }}>
            <label htmlFor="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required /><br /><br />
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" required /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button">Login</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Register form submitted:', this.state);
    // Add registration logic here
  }

  render() {
    return (
      <form id="registerForm" onSubmit={this.handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>REGISTER</h2>
        <div style={{ display: 'grid', justifyContent: 'space-evenly', border: '10px', padding: '10px 30px 10px 35px' }}>
          <div style={{ borderStyle: 'ridge', padding: '40px' }}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} required /><br /><br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required /><br /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required /><br /><br />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="submit">Register</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Fruits;