import React, {Fragment} from 'react';
import {Header} from '../components/Header';
import { LoginForm } from '../components/LoginForm';
export default function LoginScreen(){
    return(
        <Fragment>
            <Header/>
            <LoginForm/>
        </Fragment>
    );
}