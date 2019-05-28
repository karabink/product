import { createStore } from "redux";
import productsReducers from "../reducers";


let initialStore= localStorage.getItem("products-store")?
    {products:JSON.parse(localStorage.getItem("products-store"))}
    : {products:{}} ;

export default createStore(productsReducers,initialStore);
