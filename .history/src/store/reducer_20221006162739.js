import { fetchUser } from "../utils/fetchLocalStorage";
const userInfo = fetchUser()
const initState = {
    user: userInfo,
    foodItems: null,
}
const actionType = {
    SET_USER: 'SET_USER',
    SET_FOOD_ITEMS:
   
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user
            }

    }
}

export { initState, actionType, userInfo }
export default reducer