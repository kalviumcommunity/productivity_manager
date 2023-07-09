import Pickers from "../../Data/Pickers"
import ActionTypes from "../ActionTypes";
let initialState = {
    Pickers: Pickers
}

let  Reducer = (state = initialState , action ) => {

    if (action.type ==  ActionTypes.CHANGETASK ) {
        
    }

    return state;
}

export default Reducer;