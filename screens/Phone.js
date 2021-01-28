import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {HeaderText} from '../components';
import Icon from 'react-native-vector-icons/Feather';
import {TEXT_STYLES} from '../utils/styles';

const styles = StyleSheet.create({
  footerText: {
    textAlign: 'center',
    ...TEXT_STYLES.footer,
  },
  wrapper: {
    flex: 1,
  },
});

const validatePhoneNumber = (num) => {
  return false;
  // setPhoneIsValid
};

const Phone = (props) => {
  const [phoneIsValid, setPhoneIsValid] = useState(false); // needs to be boolean

  return (
    <View style={styles.wrapper}>
      <HeaderText header="Enter Your Phone Number To Begin" />
      <View>
        <TextInput onChange={validatePhoneNumber} />
        <Icon
          size={28}
          name={'arrow-next'}
          color="blue"
          disabled={!phoneIsValid}
          onPress={() => props.navigation.navigate('AccountDetails')}
        />
        }
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
