const storeTokenInformation = data => {
    return {
      type: 'storeToken',
      payload: data
    };
  };
  
  export default storeTokenInformation;
  
  export const emptyTokenInformation = () => {
    return {
      type: 'emptyToken'
    };
  };