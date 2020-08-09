import React from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import { THEME } from '../theme';
import { AntDesign } from '@expo/vector-icons';
const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = React.useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Название дела не может быть пустым');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Введите название дела...'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <AntDesign.Button name='pluscircleo' onPress={pressHandler}>
        Добавить
      </AntDesign.Button>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '60%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
});
