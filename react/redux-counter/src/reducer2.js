
const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + action.payload;
    default:
      return state;
  }
}

const action = [
  { type: 'INCREMENT', payload: 0 },
  { type: 'INCREMENT', payload: 1 },
  { type: 'INCREMENT', payload: 2 },
];

const total = action.reduce(reducer, 0);

console.log(total);