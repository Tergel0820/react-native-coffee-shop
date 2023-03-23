import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Text, Pressable} from 'react-native';
import MasterCardIcon from '../assets/MasterCardIcon';
import VisaIcon from '../assets/VisaIcon';
import ApplePayIcon from '../components/ApplePayIcon';
import Button from '../components/Button';
import MoneyIcon from '../components/MoneyIcon';
import PaymentMethod from '../components/PaymentMethod';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {useMyContext} from '../providers/context';

const Payment = () => {
  const [payment, setPayment] = useState(false);
  const {setTotalPayment, setBag} = useMyContext();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      payment && navigation.navigate('Home');
      setBag([]);
      setTotalPayment(0);
    }, 2100);
  }, [payment]);

  return (
    <View>
      <SafeAreaView
        style={{height: '100%', backgroundColor: '#fff', alignItems: 'center'}}>
        <View style={{width: '90%'}}>
          <View style={{marginTop: 24}}>
            <Text style={{color: '#2D2A2B', fontSize: 16, fontWeight: '500'}}>
              Credit card
            </Text>
          </View>
          <Pressable onPress={() => setPayment(true)} style={{marginTop: 24}}>
            <PaymentMethod
              title={'Credit card'}
              desc={'Visa      ******** 3306 '}
              icon={<MasterCardIcon />}
            />
          </Pressable>
          <Pressable onPress={() => setPayment(true)} style={{marginTop: 16}}>
            <PaymentMethod
              title={'Credit card'}
              desc={'Visa      ******** 3306 '}
              icon={<VisaIcon />}
            />
          </Pressable>
          <Pressable style={{marginTop: 16}}>
            <Button color={'white'}>
              <Text style={{color: '#D3A762'}}>Add new card</Text>
            </Button>
          </Pressable>
          <View style={{marginTop: 24}}>
            <Text style={{color: '#2D2A2B', fontSize: 16, fontWeight: '500'}}>
              Other methods
            </Text>
          </View>
          <Pressable onPress={() => setPayment(true)} style={{marginTop: 24}}>
            <PaymentMethod
              title={'Credit card'}
              desc={'Visa      ******** 3306 '}
              icon={<MoneyIcon />}
            />
          </Pressable>
          <Pressable onPress={() => setPayment(true)} style={{marginTop: 16}}>
            <PaymentMethod
              title={'Credit card'}
              desc={'Visa      ******** 3306 '}
              icon={<ApplePayIcon />}
            />
          </Pressable>
        </View>
      </SafeAreaView>
      {payment === true && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundColor: '#0000004d',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 180,
              width: 180,
              backgroundColor: '#fff',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Lottie source={require('../assets/check.json')} autoPlay />
          </View>
        </View>
      )}
    </View>
  );
};

export default Payment;
