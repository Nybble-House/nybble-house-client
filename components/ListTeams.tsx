import { useState } from 'react'
import { StyleSheet } from 'react-native'
import {Avatar} from 'react-native-elements'
import {View, Text } from './Themed'

export const ListTeams = () => {
    return (
        <View style={ styles.container }>
          <Text style={styles.title}>Teams</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Avatar
            activeOpacity={0.2}
            avatarStyle={{}}
            containerStyle={styles.avatar}
            icon={{}}
            iconStyle={{}}
            imageProps={{}}
            onLongPress={() => alert("onLongPress")}
            onPress={() => alert("onPress")}
            overlayContainerStyle={{}}
            placeholderStyle={{}}
            rounded
            size="medium"
            source={{ uri: "" }}
            title="T"
            titleStyle={{}}
          />
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Avatar
            activeOpacity={0.2}
            avatarStyle={{}}
            containerStyle={styles.avatar}
            icon={{}}
            iconStyle={{}}
            imageProps={{}}
            onLongPress={() => alert("onLongPress")}
            onPress={() => alert("onPress")}
            overlayContainerStyle={{}}
            placeholderStyle={{}}
            rounded
            size="medium"
            source={{ uri: "" }}
            title="R"
            titleStyle={{}}
          />
          <Avatar
            activeOpacity={0.2}
            avatarStyle={{}}
            containerStyle={styles.avatar}
            icon={{}}
            iconStyle={{}}
            imageProps={{}}
            onLongPress={() => alert("onLongPress")}
            onPress={() => alert("onPress")}
            overlayContainerStyle={{}}
            placeholderStyle={{}}
            rounded
            size="medium"
            source={{ uri: "" }}
            title="P"
            titleStyle={{}}
          />
            
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#403d39',
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '80%',
  },
  avatar: {
    margin: 5,
    backgroundColor: "#BDBDBD"
  }
});
