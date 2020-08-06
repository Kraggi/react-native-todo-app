import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import Navbar from './src/components/Navbar';
import TodoScreen from './src/screens/TodoScreen';

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [todoId, setTodoId] = React.useState(null);
  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id != id));
  };

  const openTodo = id => {
    setTodoId(id);
  };

  let content = (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      removeTodo={removeTodo}
      openTodo={openTodo}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content = <TodoScreen todo={selectedTodo} goBack={() => setTodoId(null)} />;
  }

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
