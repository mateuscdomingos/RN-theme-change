import * as stylesApp from './styles';

INITIAL_STATE = {
    colors: { ...stylesApp.colors_ligth },
    font: { ...stylesApp.font_small }
}

export default function styles(state = INITIAL_STATE, action) {
    if(action.type == "TOGGLE_FONTSIZE"){
        switch (action.baseFont) {
            case 0:
                return {
                    ...state,
                    font: { ...stylesApp.font_small }
                }
            case 1:
                return {
                    ...state,
                    font: { ...stylesApp.font_medium }
                }
            case 2:
                return {
                    ...state,
                    font: { ...stylesApp.font_large }
                }
            case 3:
                    return {
                        ...state,
                        font: { ...stylesApp.font_Extralarge }
                    }
        }
    }
    return state
}