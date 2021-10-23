import React from "react";
import {Header} from '../components/Header';
import {HomeProducts} from '../components/HomeProducts';
import PageLogo from "../components/PageLogo";
export function HomeScreen (){
    return (
        <React.Fragment>
            <Header/>
            <PageLogo/>
            <HomeProducts/>
        </React.Fragment>
    );
}