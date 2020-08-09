import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { THEME } from '../theme';
import {} from '@expo/vector-icons';
import AppButton from './UI/AppButton';

const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = React.useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Ошибка',
        `Минимальная длина названия 3 символа. Сейчас ${
          title.trim().length
        } символов.`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={visible} animationType='slide' transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder='Введите новое название'
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>
            Отменить
          </AppButton>
          <AppButton onPress={saveHandler}>Сохранить</AppButton>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
