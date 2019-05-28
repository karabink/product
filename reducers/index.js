import ActionTypes from "../constants/ActionTypes"
import Action from "../actions/Action"

const productsReducers=(state,action) => {
    switch (action.type)
    {
        case ActionTypes.ADD_PRODUCT:            
            return {
                products: { ...(state.products),
                            [action.payload.id]:action.payload   
                }
            }
        case ActionTypes.DELETE_PRODUCT:       
            let ob={...state.products};
            delete ob[action.payload.id];
            return {
                products: ob
            }
        case ActionTypes.EDIT_PRODUCT:         
            return {
                products: {...state.products}[action.payload.id]={...action.payload}
            }
        default:
            return state;
    }
}
export default productsReducers;

