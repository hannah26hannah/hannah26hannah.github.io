const LoggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return !state; // or true
        default:
            return state;
    }
}

export default LoggedReducer;