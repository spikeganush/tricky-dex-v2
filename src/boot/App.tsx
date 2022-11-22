/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  useColorScheme,
  View,
} from 'react-native';
import {COLOURS} from '../constants/styleConstants';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLOURS.DARKER : COLOURS.LIGHTER,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={[
            {
              backgroundColor: isDarkMode ? COLOURS.BLACK : COLOURS.WHITE,
            },
            styles.container,
          ]}>
          <Image
            source={require('../../assets/images/front.png')}
            style={styles.logo}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  highlight: {
    fontWeight: '700',
  },
  logo: {
    width: '95%',
    resizeMode: 'contain',
  },
});

export default App;
