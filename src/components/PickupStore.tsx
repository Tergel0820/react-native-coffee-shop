import React from 'react';
import {View, Text, Pressable} from 'react-native';
import ArrowRightIcon from '../assets/ArrowRightIcon';

const PickupStore = () => {
  return (
    <View
      style={{
        backgroundColor: '#2D2A2B',
        height: 60,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={{color: '#fff', opacity: 0.6, fontSize: 10}}>
          Pick-up store
        </Text>
        <Text style={{color: '#fff', marginTop: 3}}>
          Barkley village * 0.5 mi
        </Text>
      </View>
      <Pressable>
        <ArrowRightIcon color={'#fff'} />
      </Pressable>
    </View>
  );
};

export default PickupStore;
