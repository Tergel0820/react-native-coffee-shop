import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import LogoutIcon from '../assets/LogoutIcon';

const Profile = () => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 64, height: 64, borderRadius: 32, marginTop: 32}}
            source={require('../assets/icosahedronred.png')}
          />
          <Text style={{fontSize: 16, fontWeight: '500', marginTop: 8}}>
            99118811
          </Text>
          <Pressable
            style={{
              width: '90%',
              height: 56,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#0000001a',
              borderRadius: 4,
              marginTop: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <LogoutIcon />
              <Text style={{marginLeft: 12, fontSize: 16, fontWeight: '500'}}>
                Log out
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
