import { GLOBALTYPES } from '../type/globalType';

// localStorage.clear();

const initialState = {
    alert: '',
    authList: {},
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.AUTH:
            return { ...state, authList: action.payload };
        case GLOBALTYPES.ALERT:
            // return action.payload;
            return { ...state, alert: action.payload };
        default:
            return state;
    }
};

export default authReducer;
