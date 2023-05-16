import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Config from 'react-native-config';
import {SegmentControl} from 'react-navtive-segment-control';
import {useDispatch, useSelector} from 'react-redux';
import {
  getLoadingPostSelector,
  getPostSelector,
} from '../redux/selectors/postSelector';
import {getPostList} from '../redux/reducers/postSlice';

const EntryPoint = () => {
  const dispatch = useDispatch<any>();
  const postList: any = useSelector(getPostSelector);
  const loading: any = useSelector(getLoadingPostSelector);
  const data = [
    {label: 'Left', icon: 'left'},
    {label: 'Right', icon: 'right'},
  ];
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    dispatch(getPostList());
  }, []);
  if (loading) {
    return <Text>loading....</Text>;
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text> API :{Config.API_URL}</Text>
          <Text>GoogleMapApiKey : {Config.GOOGLE_MAPS_API_KEY}</Text>
          <SegmentControl
            segments={data}
            activeTab={activeTab}
            labelField="label"
            style={{
              width: 200,
              height: 60,
            }}
          />
          <Button
            title="Click vao crash"
            onPress={() => {
              throw new Error('This is a test javascript crash!');
            }}
          />
        </View>
        <View>
          {postList?.map((item: any) => {
            return (
              <View key={item.title} style={{margin: 6}}>
                <Text>{item?.title}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EntryPoint;
