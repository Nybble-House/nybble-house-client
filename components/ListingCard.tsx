import { useState,  } from 'react'
import { Stylesheet, Image } from 'react-native '
import { Card, AirbnbRating } from 'react-native-elements'
import { Text, View } from '../components/Themed';

export const ListingCard = () => {
	return (
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
			</View>
			<Card.Divider />
			<AirbnbRating
				count={5}
				defaultRating={3}
				onFinishRating={() =>
					console.log("onFinishRating()")
				}
				showRating
			/>
			<Card.Title>Lido Beach Villa</Card.Title>
		</Card>
	)
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'flex-start',
		// padding: 10,
	},
	card: {
		alignSelf: 'stretch', 
		backgroundColor: 'rgba(52, 52, 52, 0.8)',
		borderRadius: 7,
		borderColor: 'transparent' 
	},
});