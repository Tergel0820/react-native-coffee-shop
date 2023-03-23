import React from 'react';
import {Pressable} from 'react-native';

const Button = ({children, press, color}) => {
  return (
    <Pressable
      onPress={press}
      style={{
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color !== 'white' ? '#D3A762' : '#fff',
        borderWidth: 1,
        borderColor: '#D3A762',
        borderRadius: 4,
      }}>
      {children}
    </Pressable>
  );
};

export default Button;
