import { useState } from 'react'
import { StyleSheet } from 'react-native'
import {View, Text } from './Themed'

export const Template = () => {
    return (
        <View style={ styles.container }>
            
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
