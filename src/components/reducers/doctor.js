const initstate = {
    all: [],
    top: [],

}
const doctorReducer = (state = initstate, action) => {
    switch (action.type) {
        case 'SET_DOCTOR': {
            return {...state, all: state.top.push(action.payload)};
        }
        case 'SET-TOP':{
            return {...state, top: action.payload}
        }
        default:
            return initstate;
    }
};
export default doctorReducer;