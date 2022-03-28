// action is obj
// mostly use action.type
const reducer = (state,action) => {
    if (action.type === 'CLEAR_CART') {
        // return new state or payload
        return {...state, cart: []} //change cart to be empty array
    }
    if (action.type === 'REMOVE') {
        return {
            ...state, 
            cart: (state.cart.filter(cartItem => cartItem.id !== action.payload )
            ),
        }
    }
    return state;
}

export default reducer;