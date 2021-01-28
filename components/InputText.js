import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  inputWrapper: {},
  input: {
    color: 'black',
    fontWeight: '400',
  },
});

const InputText = ({onChange, placeholder, value}) => {
  return (
    <View>
      <TextInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        placeholderColor="gray"
      />
    </View>
  );
};

export default InputText;
