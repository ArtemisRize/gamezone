export default (state = [], action) => {
    switch(action.type){
        case 'SET_GAMES':
            return action.games
        case 'ADD_REVIEW':
            return [...state, action.review]
        default:
            return state
    }
}