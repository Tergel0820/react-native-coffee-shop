import React from 'react';
import {View, Text, Pressable} from 'react-native';

const OrderCart = ({
  order,
  process,
  amount,
  date,
  quantity,
}: {
  order: number;
  process: string;
  amount: number;
  date: string;
  quantity: number;
}) => {
  return (
    <View
      style={{
        borderColor: '#EAEAEA',
        borderRadius: 4,
        borderWidth: 1,
        height: 120,
        width: '100%',
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
      }}>
      <View style={{justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontSize: 16}}>Order #{order}</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 1}}>
            <Text style={{color: '#969495', fontSize: 11}}>Quantity:</Text>
            <Text style={{marginLeft: 4, fontSize: 11}}>{quantity}</Text>
          </View>
        </View>
        <Pressable
          style={{
            height: 36,
            width: 98,
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 12}}>Details</Text>
        </Pressable>
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text style={{color: '#969495'}}>{date}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text>Total Amount : ${amount}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text
            style={{
              color:
                process === 'Processing'
                  ? '#2F80ED'
                  : process === 'Success'
                  ? '#2AA952'
                  : '#F01F0E',
            }}>
            {process}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderCart;
