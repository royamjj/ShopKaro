import React from "react";
import {Header} from '../components/Header';
import {HomeProducts} from '../components/HomeProducts';
export function HomeScreen (){
    return (
        <React.Fragment>
            <Header/>
            <HomeProducts/>
        </React.Fragment>
    );
}