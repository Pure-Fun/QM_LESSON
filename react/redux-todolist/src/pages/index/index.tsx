import Taro, { Component } from '@tarojs/taro';
import { View, Input, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { add, del } from '../../actions/index';
import './index.css';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    }
  }

  saveNewTodo(e) {
    let { newTodo } = this.state
    if (!e.target.value || e.detail.value === newTodo) return;

    this.setState({
      newTodo: e.detail.value
    })
  }

  addTodo() {
    let { newTodo } = this.state;
    let { add } = this.props;
    if (!newTodo) return;
    add(newTodo);
    this.setState({
      newTodo: ''
    })
  }

  delTodo(id) {
    let { del } = this.props;
    del(id);
  }
  
  render() {
    let { newTodo } = this.state;
    const { todos } = this.props;
    console.log('==>' + todos);
    const todosJsx = todos.map(todo => {
      return (
        <View>
          <View className="todos_item">
            <Text>{todo.text}</Text>
            <View className="del" onClick={this.delTodo.bind(this, todo.id)}>-</View>
          </View>
        </View>
      )
    })
    return (
      <View className="index todos">
        <View className="add_wrap">
          <Input className="todos_item" value={newTodo} onBlur={this.saveNewTodo.bind(this)} />
          <View className="add" onClick={this.addTodo.bind(this)}>+</View>
        </View>
        <View>
          {todosJsx}
        </View>
      </View>
    )
  }
}

export default connect(({ todos }) => ({
  todos: todos.todos
}), (dispatch) => ({
  add(data) {
    dispatch(add(data))
  },
  del(id) {
    dispatch(del(id))
  }
}))(Index)
