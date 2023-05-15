/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import Config from 'react-native-config';

import {Button, SafeAreaView, Text, View} from 'react-native';
import {SegmentControl} from 'react-navtive-segment-control';

function App(): JSX.Element {
  const data = [
    {label: 'Left', icon: 'left'},
    {label: 'Right', icon: 'right'},
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <SafeAreaView>
      <View>
        <Text>{Config.API_URL}</Text>
        <Text>{Config.GOOGLE_MAPS_API_KEY}</Text>
        <Text>asdkjaslkd</Text>
        <SegmentControl
          segments={data}
          activeTab={activeTab}
          labelField="label"
        />
        <Button
          title="Click vao crash"
          onPress={() => {
            throw new Error('This is a test javascript crash!');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
