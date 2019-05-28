import ActionTypes from "../constants/ActionTypes"
import {v4} from "uuid"

const ActionProduct={           
    addProduct:function (productTitle, productCount) { 
        return {
            type:ActionTypes.ADD_PRODUCT,  
            payload:{                                              
                id:v4(),         
                title:productTitle,
                count:productCount
            }
        }
    },
    deleteProduct:function (productID) {                
        return {
            type:ActionTypes.DELETE_PRODUCT,  
            payload:{                         
                id:productID
            }
        }
    },
    editProduct:function (productID, newTitle,newCount) {
        return {
            type:ActionTypes.EDIT_PRODUCT, 
            payload:{                      
                id:productID,     
                title:newTitle,
                count:newCount
            }
        }
    },
}
export default ActionProduct;
