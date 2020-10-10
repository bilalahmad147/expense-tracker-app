const TransReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANS':
            return [action.payload, ...state];
        default:
            return state;
    }
}

export default TransReducer;