INITIAL_STATE = {
    baseFont: 0
}

export default function styles(state = INITIAL_STATE, action) {
    console.log(action)
    if(action.type == "TOGGLE_FONTSIZE"){
        return {
            ...state,
            baseFont: action.baseFont
        }
    }
    return state
}