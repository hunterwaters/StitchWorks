import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import { usersigninReducer } from './reducers/userReducers';
import { userRegisterReducer } from './reducers/userReducers';
import { productSaveReducer } from './reducers/productReducers';
import { productDeleteReducer } from './reducers/productReducers';
import { OrderCreateReducer } from './reducers/orderReducers';
import { orderDetailsReducer } from './reducers/orderReducers';
import { orderPayReducer } from './reducers/orderReducers';
import { userUpdateReducer } from './reducers/userReducers';
import { myOrderListReducer } from './reducers/orderReducers';
import { orderListReducer } from './reducers/orderReducers';
import { orderDeleteReducer } from './reducers/orderReducers';

const cartItems = Cookie.getJSON("cartItems") || []; 
const userInfo = Cookie.getJSON("userInfo") || null; 

const initialState = {cart: {cartItems, shipping: {}, payment: {}}, userSignin: {userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: usersigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    orderCreate: OrderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer
    
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;