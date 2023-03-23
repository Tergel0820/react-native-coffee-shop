import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, ImageBackground, Text, Pressable, ScrollView} from 'react-native';
import ArrowLeftIcon from '../assets/ArrowLeftIcon';
import BagIcon from '../assets/BagIcon';
import DetailShadow from '../assets/DetailShadow';
import DropdownButton from '../components/DropdownButton';
import RoundButtonsCon from '../components/RoundButtonsCon';
import Button from '../components/Button';
import {useMyContext} from '../providers/context';
import {Badge} from '@rneui/base';

const Detail = ({route}: {route: any}) => {
  const {data} = route.params;
  const navigation = useNavigation();
  const {bag, setBag, setTotalPayment, totalPayment} = useMyContext();
  const [numOfShots, setNumOfShots] = useState(1);
  const [size, setSize] = useState(8);
  return (
    <>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <ImageBackground
          style={{
            height: 375,
            width: '100%',
            position: 'relative',
            alignItems: 'center',
          }}
          source={{uri: data.image}}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable
              onPress={() => navigation.navigate('Home')}
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#ffffff33',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 16,
                marginTop: 48,
              }}>
              <ArrowLeftIcon color={'#fff'} />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('MyBag')}
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#ffffff33',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 16,
                marginTop: 48,
                position: 'relative',
              }}>
              <BagIcon color={'#fff'} />
              {bag.length !== 0 && (
                <Badge
                  badgeStyle={{
                    position: 'absolute',
                    left: -22,
                    zIndex: 1,
                    top: -34,
                    height: 18,
                    width: 18,
                    backgroundColor: '#D3A762',
                  }}
                  status="warning"
                  value={bag.length}
                />
              )}
            </Pressable>
          </View>
          <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
            <DetailShadow />
          </View>
        </ImageBackground>
        <View
          style={{
            padding: 16,
            width: '100%',
          }}>
          <Text
            style={{
              color: '#2D2A2B',
              fontSize: 16,
              fontWeight: '500',
            }}>
            Size Options
          </Text>
          <View
            style={{
              width: '100%',
              opacity: 0.2,
              height: 2,
              backgroundColor: '#D3A762',
              marginTop: 16,
            }}></View>
          <View style={{marginTop: 24}}>
            <RoundButtonsCon setSize={setSize} size={size} />
          </View>
          <Text
            style={{
              color: '#2D2A2B',
              marginTop: 48,
              fontSize: 16,
              fontWeight: '500',
            }}>
            Flavor changes
          </Text>
          <View
            style={{
              width: '100%',
              opacity: 0.2,
              height: 2,
              backgroundColor: '#D3A762',
              marginTop: 16,
            }}></View>
          <View style={{marginTop: 24}}>
            <DropdownButton title={'Milk'} buttonTitle={'Standard'} />
            <View style={{marginTop: 16}}>
              <DropdownButton
                title={'Shot'}
                type={'number'}
                press={setNumOfShots}
                numOfShots={numOfShots}
              />
            </View>
            <View style={{marginTop: 16}}>
              <DropdownButton title={'Foam'} buttonTitle={'Extra foam'} />
            </View>
            <View style={{marginTop: 16}}>
              <DropdownButton
                title={'Whipping Cream'}
                buttonTitle={'No whip'}
              />
            </View>
            <Text
              style={{
                color: '#2D2A2B',
                marginTop: 48,
                fontSize: 16,
                fontWeight: '500',
              }}>
              Nutritional facts
            </Text>
            <View
              style={{
                width: '100%',
                opacity: 0.2,
                height: 2,
                backgroundColor: '#D3A762',
                marginTop: 16,
              }}></View>
            <Text style={{color: '#969495', marginTop: 24}}>
              530 calories, 67g sugar, 21g fat
            </Text>
          </View>
        </View>
        <View style={{marginBottom: 96}}></View>
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
            press={() => {
              setBag([...bag, {item: data, size: size, shot: numOfShots}]);
              setTotalPayment(totalPayment + data.price);
            }}>
            <Text style={{color: '#fff', fontWeight: '500'}}>Add To Bag</Text>
          </Button>
        </View>
      </View>
    </>
  );
};

export default Detail;
