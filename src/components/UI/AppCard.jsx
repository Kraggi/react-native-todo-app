import React from 'react';
import { StyleSheet, View } from 'react-native';

const AppCard = props => {
  return (
    <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
