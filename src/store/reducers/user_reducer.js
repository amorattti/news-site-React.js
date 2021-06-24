
const user = (state = {}, action) => {
  switch(action.type) {
    case 'test':
      return;
    default:
      return state;  
  }
}

export default user;