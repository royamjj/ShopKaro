import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Validator from './Validator';
import Loading from './Loading';
import {login} from '../actions/userActions';
import './LoginFormCss.css';


export function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="login-form-container">
            <div className="login-heading">ShopKaro</div>
            <div className="login-heading" id="login">Login</div>
            <div className="login-credentails">
                <div className="login-username">
                    <p>Username:</p>
                    <input type="text"  className="login-input"></input>
                </div>
                <div className="login-password">
                    <p>Password:</p>
                    <input type="password"  className="login-input"></input>
                </div>
                <div style={{marginBottom:"10px"}}><p>New to ShopKaro? <Link><span style={{color:"red"}}>Register Here</span></Link></p></div>
            </div>
        </div>
    );
}