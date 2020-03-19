const defaultState = {
    visible: false,
    review: {}
}

export default (state = defaultState, action) => {
    switch(action.type){
        case 'SET_MODAL_OPEN':
            return {
                visible: action.bool,
                review: action.review
            }
        default:
            return state
    }
}