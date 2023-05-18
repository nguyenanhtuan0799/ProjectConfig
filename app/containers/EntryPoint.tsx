import React, {useEffect, useRef, useState} from 'react';
import {
  AppState,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Config from 'react-native-config';
import {SegmentControl} from 'react-navtive-segment-control';
import {useDispatch, useSelector} from 'react-redux';
import {
  getLoadingPostSelector,
  getPostSelector,
} from '../redux/selectors/postSelector';
import {getPostList} from '../redux/reducers/postSlice';
import PushNotification from 'react-native-push-notification';

const EntryPoint = () => {
  const dispatch = useDispatch<any>();
  const postList: any = useSelector(getPostSelector);
  const loading: any = useSelector(getLoadingPostSelector);
  const data = [
    {label: 'Left', icon: 'left'},
    {label: 'Right', icon: 'right'},
  ];
  const [activeTab, setActiveTab] = useState(0);

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'test-Notification',
        channelName: 'This is test Notification',
      },
      created => console.log(`createChannel returned '${created}'`),
    );
  };

  useEffect(() => {
    dispatch(getPostList());
    createChannel();
  }, []);

  if (loading) {
    return <Text>loading....</Text>;
  }

  const handleNotification = (item: any) => {
    // PushNotification.cancelAllLocalNotifications();
    // PushNotification.cancelLocalNotifications({id:item?.id});

    PushNotification.localNotification({
      channelId: 'test-Notification',
      title: 'Click test notification',
      message: 'This is test',
    });
  };

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
              <TouchableOpacity
                key={item.title}
                onPress={() => {
                  handleNotification(item);
                }}>
                <View style={{margin: 6}}>
                  <Text>{item?.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EntryPoint;
