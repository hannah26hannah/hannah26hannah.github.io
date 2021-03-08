const resizeReducer = (state = { size: 'medium' }, action) => {

    switch(action.type) {
        case 'SET_SIZE':
            return Object.assign({}, state, {
                size: action.size
            })

        default:
            return state
    }
}

export default resizeReducer;
