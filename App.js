import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainScreen from './src/screens/MainScreen';
import Navbar from './src/components/Navbar';
import TodoScreen from './src/screens/TodoScreen';
import { THEME } from './src/theme';

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [todoId, setTodoId] = React.useState(null);
  const [isReady, setIsReady] = React.useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

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
    const todo = todos.find(todo => todo.id === id);
    Alert.alert(
      'Удаление элемента',
      `Вы уверены что хотите удалить ${todo.title}?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(todo => todo.id != id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const openTodo = id => {
    setTodoId(id);
  };

  const updateTodo = (id, title) => {
    setTodos(oldState =>
      oldState.map(todo => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
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
    content = (
      <TodoScreen
        onRemove={removeTodo}
        todo={selectedTodo}
        goBack={() => setTodoId(null)}
        onSave={updateTodo}
      />
    );
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
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
  },
});
