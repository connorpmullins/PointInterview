import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button, HeaderText} from '../components';
import Icon from 'react-native-vector-icons/Feather';
import {TEXT_STYLES, VIEW_STYLES} from '../utils/styles';

const styles = StyleSheet.create({
  buttonIcon: {
    marginLeft: 8,
  },
  footerText: {
    ...TEXT_STYLES.footer,
    textAlign: 'center',
  },
  inputWrapper: {
    ...VIEW_STYLES.roundedBox,
    marginBottom: 24,
  },
  inputsContainer: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: 'white',
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
});

const AccountDetails = (props) => {
  return (
    <View style={styles.wrapper}>
      <HeaderText header="Enter Your Account Details" />
      <View style={styles.inputsContainer}>
        <TextInput style={styles.inputWrapper} placeholder="First Name" />
        <TextInput style={styles.inputWrapper} placeholder="Last Name" />
        <TextInput style={styles.inputWrapper} placeholder="Date of Birth" />
      </View>
      <Button
        onPress={() => props.navigation.navigate('VerifyIdentity')}
        disabled={false} // based on validation in dev scenario
        text="CONTINUE"
        icon={
          <Icon
            size={28}
            style={styles.buttonIcon}
            name={'arrow-right-circle'}
            color="white"
          />
        }
      />
    </View>
  );
};

export default AccountDetails;
