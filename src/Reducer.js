export const initialState = {
    user: null,   //start with user not being logged in
};

export const actionType = {
    SET_USER: "SET_USER",  //when we signed in then push information into the data layer
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case actionType.SET_USER:
            return {
                ...state, 
                user: action.user,
            };

            default:
                return state;

    }
};

export default reducer;