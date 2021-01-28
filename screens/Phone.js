import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {HeaderText} from '../components';
import Icon from 'react-native-vector-icons/Feather';
import {TEXT_STYLES, VIEW_STYLES} from '../utils/styles';

const styles = StyleSheet.create({
  footerText: {
    textAlign: 'center',
    ...TEXT_STYLES.footer,
  },
  input: {
    flex: 1,
  },
  inputWrapper: {
    ...VIEW_STYLES.roundedBox,
    alignItems: 'center',
    flexDirection: 'row',
  },
  wrapper: {
    backgroundColor: 'white',
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});

const Phone = (props) => {
  const [phoneIsValid, setPhoneIsValid] = useState(true); // needs to be boolean
  const [phoneNumber, setPhoneNumber] = useState('');
  const formatPhone = (pN) => {
    // validate, format
    setPhoneNumber(pN);
  };

  return (
    <View style={styles.wrapper}>
      <HeaderText header="Enter Your Phone Number To Begin" />
      <View style={styles.inputWrapper}>
        <TextInput
          autoFocus
          style={styles.input}
          placeholder="(000)000-0000"
          onChange={formatPhone}
          value={phoneNumber}
        />
        <Icon
          size={28}
          name={'arrow-right-circle'}
          color="black"
          disabled={!phoneIsValid}
          onPress={() => props.navigation.navigate('AccountDetails')}
        />
      </View>
      {phoneIsValid && (
        <Text styles={styles.footerText}>
          You will receive an SMS for verification. Text and data rates may
          apply.
        </Text>
      )}
    </View>
  );
};

export default Phone;
