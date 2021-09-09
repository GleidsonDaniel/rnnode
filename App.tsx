import nodejs from 'nodejs-mobile-react-native';

import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          nodejs.start('main.js');
          nodejs.channel.addListener(
            'message',
            msg => {
              console.log(msg);
            },
            this,
          );
        }}>
        <Text>OI</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          nodejs.channel.send('start');
        }}>
        <Text>OI</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
