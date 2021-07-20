import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Generatepassword from './generatepass';
// import DateTimePicker from 'react-datetime-picker';


export default class Home extends Component {
    state = {
        curTime: null,
        userID: "",
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }, 1000)
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.userID === "") {
            alert("Please complete user ID");
        } else {
            this.props.history.push('/Generatepassword')
        }
    }
    handleChangeuserID = (e) => {
        this.setState({ userID: e.target.value })
        // console.log(e.target.value);
    }
    render() {
        setInterval(function () { this.setState({ curTime: new Date().toLocaleString() }); }.bind(this), 1000);
        return (
            <div className='container-router'>
                <React.Fragment>
                    <div className='homepage-container'>
                        <div className='account-content'>
                            <label htmlFor='userID'>UserID:</label>
                            <input
                                id='userID'
                                type='userID'
                                name='userID'
                                placeholder='userID'
                                onChange={this.handleChangeuserID}></input>
                        </div>
                        <div className='current-time'>
                            <label htmlFor='currentTime'>Date:{this.state.curTime}</label>
                        </div>
                        <div className='generate-password-button'>
                            <form ref="form" >
                                <button onClick={this.onSubmitHandler}>Generate Password</button>
                            </form>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}