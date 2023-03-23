import React from 'react';
import {Pressable, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Order from './src/screens/Order';
import Profile from './src/screens/Profile';
import MyBag from './src/screens/MyBag';
import HomeIcon from './src/assets/HomeIcon';
import CartIcon from './src/assets/CartIcon';
import UserIcon from './src/assets/UserIcon';
import LogoIcon from './src/assets/Logo';
import BagIcon from './src/assets/BagIcon';
import ArrowLeftIcon from './src/assets/ArrowLeftIcon';
import Detail from './src/screens/Detail';
import {Provider, useMyContext} from './src/providers/context';
import {Badge} from '@rneui/themed';
import Payment from './src/screens/Payment';

const Tab = createBottomTabNavigator();

const Header = () => {
  const {bag} = useMyContext();
  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={{marginRight: 16, position: 'relative'}}
      onPress={() => navigation.navigate('MyBag')}>
      <BagIcon color={'#2D2A2B'} />
      {bag.length !== 0 && (
        <Badge
          badgeStyle={{
            position: 'absolute',
            left: -9,
            zIndex: 1,
            top: -24,
            height: 18,
            width: 18,
            borderWidth: 2,
            backgroundColor: '#D3A762',
          }}
          status="warning"
          value={bag.length}
        />
      )}
    </Pressable>
  );
};

const MyBagHeader = () => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={{marginLeft: 16}}
      onPress={() => navigation.navigate('Home')}>
      <ArrowLeftIcon color={'#2D2A2B'} />
    </Pressable>
  );
};

const PaymentHeader = () => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={{marginLeft: 16}}
      onPress={() => navigation.navigate('Home')}>
      <ArrowLeftIcon color={'#2D2A2B'} />
    </Pressable>
  );
};

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: '#D3A762',
            tabBarInactiveTintColor: '#838383',
            tabBarOptions: {
              showIcon: true,
            },
            headerTitle: () => <LogoIcon />,
            headerRight: () => <Header />,
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={() => ({
              tabBarIcon: ({color}) => <HomeIcon color={color} />,
            })}
          />
          <Tab.Screen
            name="Order"
            component={Order}
            options={() => ({
              tabBarIcon: ({color}) => <CartIcon color={color} />,
              headerTitle: () => (
                <Text
                  style={{color: ' #2D2A2B', fontSize: 20, fontWeight: '700'}}>
                  My Orders
                </Text>
              ),
              headerRight: () => <></>,
              headerLeft: () => (
                <Pressable style={{marginLeft: 16}}>
                  <ArrowLeftIcon color={'#2D2A2B'} />
                </Pressable>
              ),
            })}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={() => ({
              tabBarIcon: ({color}) => <UserIcon color={color} />,
            })}
          />
          <Tab.Screen
            name="Detail"
            component={Detail}
            options={{
              tabBarButton: () => null,
              header: () => null,
              tabBarStyle: {display: 'none'},
            }}
          />
          <Tab.Screen
            name="MyBag"
            component={MyBag}
            options={{
              tabBarButton: () => null,
              tabBarStyle: {display: 'none'},
              headerTitle: () => (
                <Text style={{fontSize: 16, fontWeight: '500'}}>My Bag</Text>
              ),
              headerRight: () => <></>,
              headerLeft: () => <MyBagHeader />,
            }}
          />
          <Tab.Screen
            name="Payment"
            component={Payment}
            options={{
              tabBarButton: () => null,
              tabBarStyle: {display: 'none'},
              headerTitle: () => (
                <Text style={{fontSize: 16, fontWeight: '500'}}>Payment</Text>
              ),
              headerRight: () => <></>,
              headerLeft: () => <PaymentHeader />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
