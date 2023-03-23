import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import BannerShadow from '../assets/BannerShadow';

const Banner = () => {
  return (
    <Pressable
      style={{
        position: 'relative',
        backgroundColor: '#1E3932',
        height: 204,
        width: 343,
        borderRadius: 4,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: '700',
          width: 176,
          lineHeight: 32,
          zIndex: 1,
          marginLeft: 24,
        }}>
        HERE’S TO MORE SUNNY DAYS AHEAD!
      </Text>
      <Image
        style={{marginLeft: -50}}
        source={require('../assets/lemonade.png')}
      />
      <View style={{position: 'absolute', width: '100%'}}>
        <BannerShadow />
      </View>
    </Pressable>
  );
};

export default Banner;
