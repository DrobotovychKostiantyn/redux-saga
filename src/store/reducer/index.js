import {actionTypes} from './../actions'

const initialState = {
    age:20,
    data: [],
};

const index = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP_ASYNC':
            newState.age += action.payload;
            break;
        
        case 'AGE_DOWN_ASYNC':
            newState.age -= action.payload;
            break;

      case actionTypes.FETCH_PLACEHOLDER_SUCCEEDED:
          newState.data = action.payload.slice(0, 10);
          break;
    }
    return newState;
};

export default index;