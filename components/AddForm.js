import React, { Component} from 'react';
import PropTypes from 'prop-types'
const AddForm=({onAddClick})=>{
    let _title, _count;
    return(
        <form action="">
            <div>
                <label >Назва товару
                  <input type="text" ref={el=>_title=el}/>
                </label>
            </div>
            <div>
                <label>Кількість товарут
                    <input type="number" ref={el=>_count=el}/>
                </label>
            </div>
            <button onClick={(e)=>onAddClick(e,_title.value,_count.value)}>Додати</button>
        </form>
    )
}
AddForm.propTypes = {
    onAddClick: PropTypes.func.isRequired,
}
export default AddForm;
