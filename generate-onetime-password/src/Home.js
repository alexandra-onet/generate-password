import React, { Component } from 'react';
import Logobt from './BT-logo.png';
import './HomeStyle.css';

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
                        <img src={Logobt} id='logo-bt' alt="Logo"></img>
                        <div className='generate-pass'>Generate one-time password</div>
                        <div className='account-userID'>
                            <div className='account-content'>
                                <label htmlFor='userID'>Insert your User ID</label>
                                <input
                                    id='userID'
                                    type='userID'
                                    name='userID'
                                    onChange={this.handleChangeuserID}></input>
                            </div>
                            <div className='current-time'>
                                <label htmlFor='currentTime'>Date and Time :</label>
                                <p>{this.state.curTime}</p>
                            </div>
                            <div className='generate-password-button'>
                                <button onClick={this.onSubmitHandler}>Generate Password</button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}