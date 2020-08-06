import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title='Назад' onPress={goBack} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
