import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import AndDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { CartCard } from './productCard';
import LottieView from 'lottie-react-native';

export default function Cart({ navigation }) {
	const selectedProducts = useSelector((state) => state.cartReducer);

	return (
		<View style={{ flexDirection: 'column' }}>
			{selectedProducts.price == 0 ? (
				<View style={{ alignItems: 'center', justifyContent: 'center', top: 300 }}>
					<LottieView
						autoPlay
						loop={true}
						style={{
							position: 'absolute',
							width: 300,
							height: 300
						}}
						speed={0.8}
						source={require('../assets/67163-empty-cart.json')}
					/>
				</View>
			) : (
				<ScrollView
					contentContainerStyle={{ flexDirection: 'column', justifyContent: 'center', alignitems: 'center' }}
				>
					<View style={{ flexDirection: 'column' }}>
						{selectedProducts.items.map((item, i) => (
							<CartCard
								key={i}
								title={item.title}
								price={item.price}
								image={item.image}
								total={item.price * item.quantity}
								qty={item.quantity}
                                id={item.id}
							/>
						))}
					</View>
					<View style={styles.subToal}>
						<Text style={{ fontSize: 15, color: 'white' }}>SubTotal =</Text>
						<Text style={{ fontSize: 25, color: 'white' }}>${selectedProducts.price}</Text>
					</View>
				</ScrollView>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor:'green',
		flexDirection: 'row',
		borderRadius: 10,
		padding: 10
	},
	subToal: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'grey',
		flexDirection: 'row',
		borderRadius: 10,
		marginHorizontal: 30
	},

	productName: {
		fontSize: 20
	},
	imgStyle: {
		width: 150,
		height: 150,
		borderRadius: 20
	},
	addRemoveQuantity: {
		backgroundColor: 'yellow',
		borderRadius: 20,
		width: 60,
		alignItems: 'center',
		height: 25
	},
	removeProduct: {
		backgroundColor: 'red',
		borderRadius: 20,
		width: 60,
		alignItems: 'center',
		height: 35,
		top: 10
	}
});
