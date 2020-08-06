import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Todo = ({ todo, onRemove }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('pressed', todo.id)}
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});
