import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import AppTextBold from './UI/AppTextBold';

const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 15,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Navbar;
