import React, { Component} from 'react';
import PropTypes from 'prop-types'
const Product=({id,title,count,onDelClick,num})=>{
    return(
        <tr>
            <td>{num}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td><a onClick={()=>onDelClick(id)}>Видалити</a></td>
        </tr>
    )
}
Product.propTypes = {
    id: PropTypes.any.isRequired,
    count: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onDelClick:PropTypes.func.isRequired
}
export default Product;
