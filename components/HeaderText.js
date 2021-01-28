import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontSize: '42',
    fontWeight: '400',
  },
  headerTextWrapper: {
    textAlign: 'center',
  },
});

const HeaderText = ({header}) => (
  <View style={styles.headerTextWrapper}>
    <Text>{header}</Text>
  </View>
);

export default HeaderText;
