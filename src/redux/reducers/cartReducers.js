import { getDB, removerFromDB,addToCart } from "../../utilities/LocalStorage";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: Object.keys(getDB() || {})
}

const cartReducers = (state=initialState,action)=> {
    switch(action.type) {
        case ADD_TO_CART:
            const newId = action.id;
            if(state.cart.includes(newId)) return state;
            const newCart = [...state.cart,newId];
            addToCart(newId);
            return {cart:newCart};
        case REMOVE_FROM_CART:
            const removeId = action.id;
            const newRemovedCart = state.cart.filter(ct=>ct.id !== removeId);
            removerFromDB(removeId);
            return {cart:newRemovedCart};
        default:
            return state;
    }
}
export default cartReducers;