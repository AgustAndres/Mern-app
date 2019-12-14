const initialState = { userdata: [] };

const registerReducer = (state = initialState, action) => {
  console.log("action.payload de REGISTER")
  console.log(action.payload)
  switch (action.type) {
    case 'addUser':
      return { ...state, userdata: action.payload };
    default:
      return state;
  }
};

export default registerReducer;