import { useState } from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import {View, Text } from './Themed'
import { ListItem, Card, Input } from 'react-native-elements'

export const EventFeed = () => {
    return (
        <View style={ styles.container }>
          <ListItem
            Component={TouchableHighlight}
            containerStyle={styles.listCards}
            disabledStyle={{ opacity: 0.5 }}
            onLongPress={() => console.log("onLongPress()")}
            onPress={() => console.log("onLongPress()")}
            pad={20}
          >
            <Card containerStyle={styles.voteCard} wrapperStyle={{}}>
              <Text>Proposal</Text> 
              <Card.Title> Spend $500 on Maintenace</Card.Title>

            </Card>
          </ListItem>
            
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 20,
    backgroundColor: '#403d39',
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
  listCards: {
    width: '100%',
    marginTop: 10,
    borderRadius: 5,
    alignItems: "flex-start",
    justifyContent: 'flex-start',
  },
  voteCard: {
    width: '100%',
    margin: 10,
    borderRadius: 15
  }
});
