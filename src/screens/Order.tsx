// Юу гэж бичих вэ

import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import OrderCart from '../components/OrderCart';
import OrderData from '../order_data.json';

const Order = () => {
  const selectAnim = useRef(new Animated.Value(0)).current;
  const [tab, setTab] = useState('processing');
  const selectTranslate = (value: {value: number}) => {
    Animated.spring(selectAnim, {
      toValue: value,
      friction: 8,
      tension: 24,
      useNativeDriver: true,
    }).start();
  };
  return (
    <SafeAreaView>
      <View
        style={[
          {
            width: '100%',
            height: 44,
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'relative',
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 5,
          },
        ]}>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            setTab('processing');
            selectTranslate(0);
          }}>
          <Text style={{fontSize: 16}}>Processing</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            setTab('success');
            selectTranslate(130);
          }}>
          <Text style={{fontSize: 16}}>Success</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            setTab('canceled');
            selectTranslate(260);
          }}>
          <Text style={{fontSize: 16}}>Canceled</Text>
        </Pressable>
        <Animated.View
          style={[
            {
              position: 'absolute',
              height: 3,
              width: '33.3%',
              bottom: 0,
              backgroundColor: '#D3A762',
            },
            {transform: [{translateX: selectAnim}]},
          ]}></Animated.View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Animated.View
          style={[
            {width: '100%', alignItems: 'center'},
            {
              transform: [
                {
                  translateX: selectAnim.interpolate({
                    inputRange: [0, 130],
                    outputRange: [0, -400],
                  }),
                },
              ],
            },
          ]}>
          <FlatList
            style={{width: '90%', height: '93.5%'}}
            data={OrderData.filter(el => el.process === 'Processing')}
            renderItem={({item, index}) => (
              <OrderCart
                order={item.order}
                process={item.process}
                amount={item.amount}
                date={item.date}
                quantity={item.quantity}
              />
            )}
          />
        </Animated.View>
        <Animated.View
          style={[
            {width: '100%', alignItems: 'center'},
            {
              transform: [
                {
                  translateX: selectAnim.interpolate({
                    inputRange: [0, 130],
                    outputRange: [0, -390],
                  }),
                },
              ],
            },
          ]}>
          <FlatList
            style={{width: '90%', height: '93.5%'}}
            data={OrderData.filter(el => el.process === 'Success')}
            renderItem={({item, index}) => (
              <OrderCart
                order={item.order}
                process={item.process}
                amount={item.amount}
                date={item.date}
                quantity={item.quantity}
              />
            )}
          />
        </Animated.View>
        <Animated.View
          style={[
            {width: '100%', alignItems: 'center'},
            {
              transform: [
                {
                  translateX: selectAnim.interpolate({
                    inputRange: [0, 130],
                    outputRange: [0, -390],
                  }),
                },
              ],
            },
          ]}>
          <FlatList
            style={{width: '90%', height: '93.5%'}}
            data={OrderData.filter(el => el.process === 'Canceled')}
            renderItem={({item, index}) => (
              <OrderCart
                order={item.order}
                process={item.process}
                amount={item.amount}
                date={item.date}
                quantity={item.quantity}
              />
            )}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({
  pressable: {
    width: '33.3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
