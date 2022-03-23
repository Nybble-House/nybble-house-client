import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'
import { Text, View } from '../components/Themed';

import { ListTeams } from '../components/ListTeams'

export default function Governance() {
  return (
    <View style={styles.container}>
      <View>
        <ListTeams />
        {/* <Header
          backgroundColor="transparent"
          backgroundImageStyle={{}}
          barStyle="default"
        centerComponent={ {text: 'MY TITLE', style: { color: '#fff' }} }
          centerContainerStyle={{flexDirection: 'row'}}
          containerStyle={{ width: 50 }}
          leftComponent={{ icon: "menu", color: "#fff" }}
          leftContainerStyle={{}}
          // linearGradientProps={{}}
          placement="left"
          rightComponent={{}}
          rightContainerStyle={{}}
          statusBarProps={{}}
        /> */}
      </View>
      {/* <Text style={styles.title}>Governance</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/Governance.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
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
