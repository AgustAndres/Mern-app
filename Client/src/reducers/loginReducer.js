const initialState = { userLogin: [] };

const loginReducer = (state = initialState, action) => {
  console.log("action.payload de LOGIN")
  console.log(action.payload)
  switch (action.type) {
    case 'storeToken':
      return { ...state, userLogin: action.payload };
      case 'emptyToken':
        return { ...state, userLogin: [] };
    default:
      return state;
  }
};

export default loginReducer;