import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AccountDetails, Phone, VerifyIdentity} from './screens';
import {NavigationHeader} from './components';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const TABS = ['Phone', 'AccountDetails', 'VerifyIdentity'];

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flex}>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            header: ({scene, previous, navigation}) => {
              const {options} = scene.descriptor;
              const title =
                options.headerTitle !== undefined
                  ? options.headerTitle
                  : options.title !== undefined
                  ? options.title
                  : scene.route.name;
              return (
                <NavigationHeader
                  title={title}
                  tabs={TABS}
                  leftButton={
                    previous ? (
                      <Icon
                        name="arrow-left"
                        size={26}
                        onPress={navigation.goBack}
                      />
                    ) : undefined
                  }
                  style={options.headerStyle}
                />
              );
            },
          }}>
          <Stack.Screen name="Phone" component={Phone} />
          <Stack.Screen name="AccountDetails" component={AccountDetails} />
          <Stack.Screen name="VerifyIdentity" component={VerifyIdentity} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({flex: {flex: 1}});

export default App;
