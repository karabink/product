import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ProductApp from './containers/ProductApp'
import { createStore } from 'redux'
import productsReducers from "./reducers"
import store from './store'               


const renderProductsList = () => {
        localStorage.setItem("products-store", JSON.stringify(store.getState().products));
        ReactDOM.render(
            <ProductApp store={store}/>,
            document.getElementById("product-container")
        );
};

store.subscribe(renderProductsList);
export default renderProductsList;
