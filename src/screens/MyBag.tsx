import React from 'react';
import {View, ScrollView, Text, Image, Pressable} from 'react-native';
import Button from '../components/Button';
import {useMyContext} from '../providers/context';
import CloseIcon from '../assets/CloseIcon';
import {useNavigation} from '@react-navigation/native';

const MyBag = () => {
  const {bag, setBag, totalPayment} = useMyContext();
  const navigation = useNavigation();

  return (
    <View
      style={{height: '100%', alignItems: 'center', backgroundColor: '#fff'}}>
      <ScrollView style={{width: '90%'}}>
        <Text
          style={{
            marginTop: 24,
            color: '#2D2A2B',
            fontSize: 16,
            fontWeight: '500',
          }}>
          Order Items ({bag.length})
        </Text>
        {bag.map((el, index) => (
          <View>
            <View
              style={{
                height: 96,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 24,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{height: 96, width: 96, borderRadius: 4}}
                  source={{uri: el.item.image}}
                />
                <View style={{marginLeft: 12}}>
                  <Text
                    style={{color: '#2D2A2B', fontSize: 16, fontWeight: '500'}}>
                    {el.item.title}
                  </Text>
                  <Text
                    style={{
                      color: '#2D2A2B',
                      marginTop: 4,
                      fontSize: 13,
                      fontWeight: '300',
                    }}>
                    ${el.item.price} / spruce
                  </Text>
                </View>
              </View>
              <Pressable
                onPress={() => setBag(bag.filter((el, i) => index !== i))}>
                <CloseIcon />
              </Pressable>
            </View>
            <View
              style={{
                width: '100%',
                height: 0,
                borderWidth: 1,
                borderColor: '#EAEAEA',
                marginTop: 24,
              }}></View>
          </View>
        ))}
        {bag.length !== 0 && (
          <View style={{marginTop: 24}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#2D2A2B', fontSize: 13, fontWeight: '300'}}>
                Subtotal
              </Text>
              <Text style={{color: '#2D2A2B', fontSize: 13, fontWeight: '300'}}>
                ${totalPayment}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 8,
              }}>
              <Text style={{color: '#2D2A2B', fontSize: 13, fontWeight: '300'}}>
                Tax & Fees
              </Text>
              <Text style={{color: '#2D2A2B', fontSize: 13, fontWeight: '300'}}>
                $0
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 8,
              }}>
              <Text style={{color: '#2D2A2B', fontSize: 16, fontWeight: '500'}}>
                Total
              </Text>
              <Text style={{color: '#2D2A2B', fontSize: 16, fontWeight: '500'}}>
                ${totalPayment}
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
      <View
        style={[
          {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 90,
            backgroundColor: '#fff',
            alignItems: 'center',
          },
          {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          },
        ]}>
        <View style={{width: '90%', marginTop: 16}}>
          <Button
            press={() => totalPayment !== 0 && navigation.navigate('Payment')}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>
              Check Out ${totalPayment}
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default MyBag;
