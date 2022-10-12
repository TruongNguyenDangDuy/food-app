import { fetchUser, fetchCartItem } from "../utils/fetchLocalStorage";
const userInfo = fetchUser()

const initState = {
    user: userInfo,
    foodItems: null,
    cartItems: [],
    
}
const actionType = {
    SET_USER: 'SET_USER',
    SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
    SET_CART_ITEMS: 'SET_CART_ITEMS',

}

const reducer = (state, action) => {
    
    switch (action.type) {
        
        case actionType.SET_USER:
            
            return {
               
                ...state,
                user: action.user
            }
        case actionType.SET_FOOD_ITEMS:
            return {
                ...state,
                foodItems: action.foodItems
            }
        case actionType.SET_CART_ITEMS:
            const itemIndex = cartItems?.findIndex(item => item?.id === product?.id)
        if(itemIndex >= 0 ){
            cartItems[itemIndex].qty += 1
            
            return {
                ...state,
               
                cartItems: [...state.cartItems, action.cartItems]
            }


    }

}

export { initState, actionType, userInfo }
export default reducer