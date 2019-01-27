import { ANY_ACTION } from "../actions/anyAction";

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
    switch (action) {
        case ANY_ACTION:
            return INITIAL_STATE;
    
        default:
            return state;
    }
}