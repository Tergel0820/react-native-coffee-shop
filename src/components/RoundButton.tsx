import React from 'react';
import {View, Pressable, Text} from 'react-native';
import Size8oz from '../assets/8oz';
import Size12oz from '../assets/12oz';
import Size16oz from '../assets/16oz';
import Size20oz from '../assets/20oz';
import Size24oz from '../assets/24oz';

const RoundButton = ({
  size,
  press,
  select,
}: {
  size: number;
  press: any;
  select: number;
}) => {
  return (
    <Pressable
      style={{
        height: 64,
        width: 64,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={press}>
      <View style={{alignItems: 'center', marginTop: 22}}>
        {size === 8 ? (
          <Size8oz />
        ) : size === 12 ? (
          <Size12oz />
        ) : size === 16 ? (
          <Size16oz />
        ) : size === 20 ? (
          <Size20oz />
        ) : (
          <Size24oz />
        )}
        <Text
          style={{
            marginTop: 8,
            fontSize: 12,
            fontWeight: size === select ? '500' : '300',
            color: size === select ? '#2D2A2B' : '#969495',
          }}>
          {size === 8
            ? 'Small'
            : size === 12
            ? 'Spruce'
            : size === 16
            ? 'Ceder'
            : size === 20
            ? 'Redwood'
            : 'Giant'}
        </Text>
      </View>
    </Pressable>
  );
};

export default RoundButton;
