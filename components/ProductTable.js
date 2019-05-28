import React, { Component} from 'react';
import PropTypes from 'prop-types'
import Product from "./Product"
const ProductTable=({products,onDelClick})=>{
    return (Object.keys(products).length>0) ?(
        <table>
            <thead>
                <th>№</th>
                <th>Назва</th>
                <th>Кількість</th>
                <th>Видалення</th>
            </thead>
            <tbody>
             {Object.keys(products).map(
                 (id,num) => (<Product key={id} {...products[id]}
                              onDelClick={onDelClick} num={num+1}/>)
                             )
             }
             </tbody>
        </table>)
        : <div>Cписок товарів порожній</div>
}
Product.propTypes = {
    products: PropTypes.object,
    onDelClick:PropTypes.func.isRequired
}
export default ProductTable;
