import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: 'blue',
  },
  buttonWrapper: {
    borderRadius: 16,
  },
});

const Button = ({text, disabled, icon, onClick}) => (
  <TouchableOpacity
    style={[styles.buttonWrapper, !disabled ? styles.activeButton : {}]}>
    <Text>{text}</Text>
    <Icon size={28} name={icon} color={disabled ? 'gray' : 'blue'} />
  </TouchableOpacity>
);

export default Button;
