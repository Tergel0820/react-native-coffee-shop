import React from 'react';
import {Pressable, SafeAreaView, ScrollView, View, Text} from 'react-native';
import Banner from '../components/Banner';
import PickupStore from '../components/PickupStore';
import Category from '../components/Category';
import Data from '../mock_data.json';
import notifee from '@notifee/react-native';
import Button from '../components/Button';

const Home = () => {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'H4CK1NG',
      body: 'Device is successfully hacked.',
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <PickupStore />
        <View style={{width: '100%', marginTop: 12, alignItems: 'center'}}>
          <View style={{width: '90%'}}>
            <Button press={() => onDisplayNotification()}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>
                Get notification
              </Text>
            </Button>
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center', marginTop: 24}}>
          <Banner />
        </View>
        <View>
          <Category title={'Your favourite'} data={Data} />
        </View>
        <View>
          <Category title={'Seasonal Drinks'} data={Data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
