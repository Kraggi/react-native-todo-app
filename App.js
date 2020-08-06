import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/Navbar';
import AddTodo from './src/AddTodo';
import Todo from './src/Todo';

export default function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
