export default (state = false, action) => {
    switch(action.type){
        case 'SET_MODAL_OPEN':
            return action.bool
        default:
            return state
    }
}