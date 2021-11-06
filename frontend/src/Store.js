import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { productListReducer, productDetailsReducer } from './reducers/productReducer';
import { userLoginReducer } from './reducers/userReducer';


const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    userLogin:userLoginReducer,
});

let initialState = {};
const middleWare = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):[]

initialState={
    userLogedIn:{userInfo: userInfoFromStorage},
}

export default store;

