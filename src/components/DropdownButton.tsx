import React from 'react';
import {View, Text, Pressable} from 'react-native';
import ArrowDownIcon from '../assets/ArrowDownIcon';
import PlusIcon from '../assets/PlusIcon';
import MinusIcon from '../assets/MinusIcon';

const DropdownButton = ({
  title,
  buttonTitle,
  type,
  press,
  numOfShots,
}: {
  title: string;
  buttonTitle: string;
  type: string;
}) => {
  return (
    <View>
      <Text style={{fontSize: 12, color: '#969495'}}>{title}</Text>
      <Pressable
        style={{
          width: '100%',
          height: 48,
          borderWidth: 1,
          borderColor: type === 'number' ? '#D3A762' : '#EAEAEA',
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
          marginTop: 8,
        }}>
        {buttonTitle ? (
          <Text>{buttonTitle}</Text>
        ) : (
          <Text>{numOfShots} Shots</Text>
        )}
        {type ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
            }}>
            <Pressable
              onPress={() =>
                press(numOfShots === 1 ? numOfShots - 0 : numOfShots - 1)
              }>
              <MinusIcon />
            </Pressable>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                paddingHorizontal: 8,
                marginTop: -2,
              }}>
              {numOfShots}
            </Text>
            <Pressable onPress={() => press(numOfShots + 1)}>
              <PlusIcon />
            </Pressable>
          </View>
        ) : (
          <ArrowDownIcon />
        )}
      </Pressable>
    </View>
  );
};

export default DropdownButton;
