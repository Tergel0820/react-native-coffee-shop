import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import Cart from './Cart';

const Category = ({
  title,
  data,
}: {
  title: string;
  data: Array<string | number>;
}) => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 24, marginLeft: 24}}>
      <Text style={{fontSize: 16, fontWeight: '500'}}>{title}</Text>
      <FlatList
        style={{marginTop: 12}}
        data={data}
        horizontal
        renderItem={({item}: {item: any}) => (
          <Pressable
            onPress={() => navigation.navigate('Detail', {data: item})}>
            <Cart image={item.image} title={item.title} price={item.price} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Category;
