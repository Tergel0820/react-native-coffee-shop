import React, {useRef} from 'react';
import {Animated, View} from 'react-native';
import RoundButton from './RoundButton';

const RoundButtonsCon = ({size, setSize}: {size: any; setSize: () => {}}) => {
  const translateAnim = useRef(new Animated.Value(16)).current;

  const PressAnimation = (value: {value: number}) => {
    Animated.spring(translateAnim, {
      toValue: value,
      friction: 8,
      tension: 30,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
      }}>
      <RoundButton
        size={8}
        press={() => {
          setSize(8);
          PressAnimation(16);
        }}
        select={size}
      />
      <RoundButton
        size={12}
        press={() => {
          setSize(12);
          PressAnimation(90);
        }}
        select={size}
      />
      <RoundButton
        size={16}
        press={() => {
          setSize(16);
          PressAnimation(164);
        }}
        select={size}
      />
      <RoundButton
        size={20}
        press={() => {
          setSize(20);
          PressAnimation(238);
        }}
        select={size}
      />
      <RoundButton
        size={24}
        press={() => {
          setSize(24);
          PressAnimation(312);
        }}
        select={size}
      />
      <Animated.View
        style={[
          {
            height: 64,
            width: 64,
            backgroundColor: '#d3a7624d',
            borderRadius: 32,
            borderWidth: 2,
            borderColor: '#D3A762',
            position: 'absolute',
            left: -16,
          },
          {transform: [{translateX: translateAnim}]},
        ]}></Animated.View>
    </View>
  );
};

export default RoundButtonsCon;
