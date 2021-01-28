import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: 'black',
  },
  navHeaderWrapper: {
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: '100%',
  },
  tab: {
    backgroundColor: 'gray',
    height: 2,
    marginHorizontal: 6,
    minWidth: 28,
  },
  tabIndicatorWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
});

const NavigationHeader = ({leftButton, tabs, title}) => (
  <View style={styles.navHeaderWrapper}>
    {leftButton}
    <View style={styles.tabIndicatorWrapper}>
      {tabs.map((tab) => (
        <View
          key={tab}
          style={[styles.tab, tab === title ? styles.activeTab : {}]}
        />
      ))}
    </View>
  </View>
);

export default NavigationHeader;
