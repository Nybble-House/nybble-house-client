import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'
import { Text, View } from '../components/Themed';

import { ListTeams } from '../components/ListTeams'
import { FundingPot } from '../components/FundingPot'
import { EventFeed } from '../components/EventFeed'

export default function Governance() {
  return (
    <View style={styles.container}>
      <ListTeams />
      <View style={styles.sectionRight}>
        <FundingPot />
        <EventFeed />
        {/* <ActionMenu /> */}
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
    justifyContent: 'flex-start',
  },
  sectionRight: {
    width: '80%',
    alignContent: 'flex-start',
    justifyContent: "flex-start",
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
