import React from 'react';
import {View, Text} from 'react-native';
import ArrowRightIcon from '../assets/ArrowRightIcon';

const PaymentMethod = ({icon, title, desc}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 56,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View>{icon}</View>
        <View style={{marginLeft: 24}}>
          <Text style={{fontSize: 12, fontWeight: '700'}}>{title}</Text>
          <Text
            style={{
              color: '#2D2A2B',
              fontSize: 12,
              fontWeight: '300',
              marginTop: 4,
            }}>
            {desc}
          </Text>
        </View>
      </View>
      <View>
        <ArrowRightIcon color={'#000'} />
      </View>
    </View>
  );
};

export default PaymentMethod;
