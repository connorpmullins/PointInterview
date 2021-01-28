import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TEXT_STYLES, VIEW_STYLES} from '../utils/styles';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    ...TEXT_STYLES.button,
  },
  buttonWrapper: {
    ...VIEW_STYLES.roundedBox,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Button = ({text, disabled, icon, onClick}) => (
  <TouchableOpacity
    style={[styles.buttonWrapper, !disabled ? styles.activeButton : {}]}>
    <Text style={styles.buttonText}>{text}</Text>
    {icon}
  </TouchableOpacity>
);

export default Button;
