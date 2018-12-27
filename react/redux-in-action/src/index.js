import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers} from 'redux';
import { Provider, connect } from 'react-redux';

const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

// state get函数 可以对状态值进行返回，或者追加修饰。state代表状态树，多个reducer就有多个分支，命名空间。
// 返回应用当前的 state 树。它与 store 的最后一个 reducer 返回值相同。
const getVisibility = state => state.visible;
const getCounterValue = state => state.counter.value;

// 初始化状态
const initialState = {
  visible: true,
  counter: {
    value: 0
  }
};

// reducer可以有多个，由combineReducers合并，将应用的设计模块化。
const counterReducer = function(state={value: 0}, action) {
  if (action.type === ADD) {
    return { value: state.value + 1}
  } else if (action.type === SUBTRACT) {
    return { value: state.value - 1 }
  }
  return state;
}

const visibilityReducer = (state=true, action) => {
  if (action.type === CHANGE_VISIBILITY) {
    return action.visible;
  }
  return state;
}

// combineReducers辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，
// 合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
const rootReducer = combineReducers({
  visible: visibilityReducer,
  counter: counterReducer
});


const add = () => ({type: ADD});
const subtract = () => ({type: SUBTRACT});
const changeVisibility = (visible) => ({
  type: CHANGE_VISIBILITY,
  visible
})

// 创建一个Redux store来存放应用中所有的state，一个应用只能有个store。
const store = createStore(rootReducer, initialState);

// redux 架构影响了组件的设计为函数表现型组件，加 connect 设计了state，dispatch的高阶容器型组件
function Counter({ value, add, subtract }) {
  return (
    <div>
      <p>Value:{value}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  )
}

const CounterConnected = connect(state => ({
  value: getCounterValue(state)
}), 
dispatch => ({                                  // dispatch(action): 分发action，这是改变state的唯一方法。
  add: () => dispatch(add()),
  subtract: () => dispatch(subtract())
}))(Counter);

const Visibility = ({changeVisibility}) => (
  <div>
    <button onClick={() => changeVisibility(true)}>Visible</button>
    <button onClick={() => changeVisibility(false)}>Hidden</button>
  </div>
)

const VisibilityConnected = connect(null, dispatch => ({
  changeVisibility: value => dispatch(changeVisibility(value))
}))(Visibility);

const App = ({ visible }) => (
  <div>
    <VisibilityConnected /> 
    { visible && <CounterConnected />}
  </div>
);

const AppConnected = connect(
  state => ({
    visible: getVisibility(state)
  })
)(App);

ReactDOM.render(<Provider store={store}><AppConnected /></Provider>, document.getElementById('root'));
