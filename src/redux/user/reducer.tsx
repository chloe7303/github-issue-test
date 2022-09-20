const initialState = {
  user: '',
  token: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      // return {user: {action.payload.user}}
      return state;
    case 'REMOVE_USER':
      return {};
    default:
      return state;
  }
};

export default userReducer;
