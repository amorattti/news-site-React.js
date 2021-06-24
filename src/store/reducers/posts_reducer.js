
const posts = (state = {}, action) => {
  switch (action.type) {
    case 'test':
      return;
    default:
      return state;
  }
}

export default posts;