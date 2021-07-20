import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Home from './Home';

export default class Generatepassword extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        password: { length: 8, data: "" },
        minutes: 0,
        seconds: 5,
      }
    }

    setLength = ({ value }) => {
      this.setState(({ progress, password }) => ({
        password: { ...password, length: value }
      }), () => this.buildPassword());
    }
  
    buildPassword = () => {
      let a = "",
          b = "abcdefghijklmnopqrstuvwxyz1234567890",
          c = this.state.password.length;
      for(let ma = 0; ma < c; ma++) {
        a += b[Math.floor(Math.random() * b.length)];
      }
      this.setState(state => ({
        password: { ...state.password, data: a }
      }));
    }
    componentDidMount() {
        this.buildPassword();
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    componentDidUpdate(){
        if(this.state.myInterval === 0){
           <Redirect to={'/Home'} />
        }
    }
    render() {
        const { minutes, seconds } = this.state;
      return (
        <div className="generator">
          <h1 className="generator-pass">{ this.state.password.data }</h1>
          <div className="generator-strong">
          <div>
                { minutes === 0 && seconds === 0
                    ? <Redirect to={'/home'} />
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
          </div>
        </div>
      );
    }
  }

  