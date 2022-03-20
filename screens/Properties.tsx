import { useState } from 'react'
import { StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { Card, SearchBar,} from 'react-native-elements'

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function Properties() {
	const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
			<SearchBar
				platform="default"
				containerStyle={ styles.search }
				inputContainerStyle={{}}
				inputStyle={{}}
				leftIconContainerStyle={{}}
				rightIconContainerStyle={{}}
				loadingProps={{}}
				onChangeText={newVal => setValue(newVal)}
				onClearText={() => console.log(onClearText())}
				placeholder="Where to? "
				placeholderTextColor="#888"
				round
				cancelButtonTitle="Cancel"
				cancelButtonProps={{}}
				onCancel={() => console.log(onCancel())}
				value={value}
			/>
			<ScrollView>
				<Card containerStyle={styles.card} wrapperStyle={{}}>
					<View
						style={{
							position: "relative",
							alignItems: "center",
							alignSelf: "stretch"
						}}
					>
						<Image
							style={{ width: 300, height: 250}}
							resizeMode="contain"
							source={require('../assets/images/Lido-Beach-Villa-15.jpg')}
						/>
						{/* <Text>Pranshu Chittora</Text> */}
					</View>
					<Card.Divider />
					<Card.Title>Lido Beach Villa</Card.Title>
				</Card>
				<Card containerStyle={styles.card} wrapperStyle={{}}>
					<View
						style={{
							position: "relative",
							alignItems: "center",
							alignSelf: "stretch"
						}}
					>
						<Image
							style={{ width: 300, height: 250}}
							resizeMode="contain"
							source={require('../assets/images/Lido-Beach-Villa-15.jpg')}
						/>
						{/* <Text>Pranshu Chittora</Text> */}
					</View>
					<Card.Divider />
					<Card.Title>Lido Beach Villa</Card.Title>
				</Card>
				<Card containerStyle={styles.card} wrapperStyle={{}}>
					<View
						style={{
							position: "relative",
							alignItems: "center",
							alignSelf: "stretch"
						}}
					>
						<Image
							style={{ width: 300, height: 250}}
							resizeMode="contain"
							source={require('../assets/images/Lido-Beach-Villa-15.jpg')}
						/>
						{/* <Text>Pranshu Chittora</Text> */}
					</View>
					<Card.Divider />
					<Card.Title>Lido Beach Villa</Card.Title>
				</Card>
			</ScrollView>
      {/* <Text style={styles.title}>Properties/Home</Text> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/Properties.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'flex-start',
		// padding: 10,
	},
	search: {
		alignSelf: 'stretch',
		backgroundColor: 'transparent',
		// width: (Dimensions.get('window').width),
	},
	card: {
		alignSelf: 'stretch', 
		backgroundColor: 'rgba(52, 52, 52, 0.8)',
		borderRadius: 7,
		borderColor: 'transparent' 
	},
  title: {
    fontSize: 20,
		fontWeight: 'bold',
		marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
