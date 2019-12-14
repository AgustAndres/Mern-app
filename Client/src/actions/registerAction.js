const registerUser = data => {
    return {
      type: 'addUser',
      payload: data
    };
  };
  
  export default registerUser;