import React from 'react';
import { StatusBar, View } from 'react-native';
import Constants from 'expo-constants';

function CustomStatusBar({...props}) {
  return (
    <View style={{height: Constants.statusBarHeight}}>
      <StatusBar translucent {...props} />
    </View>
  );
}

export default CustomStatusBar;
