import React from 'react';
import {View, Image, Text} from 'react-native';

const Cart = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: number;
}) => {
  return (
    <View style={{width: 160, height: 240, marginRight: 12}}>
      <Image style={{height: 180, borderRadius: 4}} source={{uri: image}} />
      <Text
        style={{
          color: '#2D2A2B',
          fontSize: 16,
          fontWeight: '500',
          marginTop: 12,
        }}>
        {title}
      </Text>
      <Text style={{fontSize: 13, fontWeight: '300', marginTop: 4}}>
        ${price} / spruce
      </Text>
    </View>
  );
};

export default Cart;
