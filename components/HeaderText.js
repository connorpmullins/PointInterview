import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TEXT_STYLES} from '../utils/styles';

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    ...TEXT_STYLES.header,
  },
  headerTextWrapper: {
    alignSelf: 'center',
    marginBottom: 32,
    marginTop: 6,
    width: '80%',
  },
});

const HeaderText = ({header}) => (
  <View style={styles.headerTextWrapper}>
    <Text style={styles.headerText}>{header}</Text>
  </View>
);

export default HeaderText;
