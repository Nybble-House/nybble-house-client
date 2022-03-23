import { useState } from 'react'
import { StyleSheet } from 'react-native'
import {View, Text } from './Themed'

export const FundingPot = () => {
    return (
        <View style={ styles.container }>
          <Text style={styles.title}>Nybble House</Text>
          <Text>Balance: 20M NYB</Text>
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
    margin: 20,
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
