import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux'
import ActionProduct from "../actions/Action"
import ProductTable from "../components/ProductTable"
import AddForm from "../components/AddForm"

class ProductApp extends Component{
    constructor(props){
        super(props);
        this.store=this.props.store;
    }
    onAddClick(e,title,count)
    {
        e.preventDefault()
        this.store.dispatch(ActionProductGenerators.addProduct(title,parseInt(count)))
    }
    onDelClick(id)
    {
        this.store.dispatch(ActionProductGenerators.deleteProduct(id));
    }
    render()
    {
        let prod=this.store.getState().products;
        return(
            <div>
                 <ProductTable products={prod} onDelClick={this.onDelClick.bind(this)}/>
                 <AddForm onAddClick={this.onAddClick.bind(this)}/>
            </div>

        )
    }
}
ProductApp.propTypes = {
    store: PropTypes.object.isRequired,
}
export default ProductApp;
