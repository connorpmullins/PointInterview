/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
// Look into this when a job isnt on the line and maybe remove
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AccountDetails, Phone, VerifyIdentity} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Stack.Navigator>
          <Stack.Screen name="Phone" component={Phone} />
          <Stack.Screen name="AccountDetails" component={AccountDetails} />
          <Stack.Screen name="VerifyIdentity" component={VerifyIdentity} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
