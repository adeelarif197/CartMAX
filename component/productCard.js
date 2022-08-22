import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from './Redux/Store/Reducers/cartReducer';
import AndDesign from 'react-native-vector-icons/AntDesign';

const productCard = ({id, title, desc, price, image }) => {
	const dispatch = useDispatch();
	const [ qty, setQty ] = useState(1);

	function addToCart() {
		const data = { id, title, desc, price: price * qty, image, quantity: qty };
		dispatch(addProduct(data));
		setQty(1);
	}
	return (
		<View style={styles.container}>
			<View>
				<Image style={styles.imgStyle} source={{ uri: image }} />
			</View>
			<View style={{ width: 190, height: 190, borderRadius: 10, left: 5 }}>
				<View>
					<Text style={styles.productName}>{title}</Text>
                    {/* <Text style={{color: 'red', fontSize: 17, backgroundColor: 'yellow'}}>{id}</Text> */}
				</View>
				<Text>-----------------------</Text>
				<Text>Description</Text>
				<ScrollView>
					<Text>{desc}</Text>
				</ScrollView>
				<Text style={{ top: 22, fontSize: 17, fontFamily: 'bold' }}>Price</Text>
				<Text style={{ top: 22, fontSize: 15 }}>${price}</Text>
				<View style={{ bottom: 60 }}>
					<View style={{ alignItems: 'flex-end', flexDirection: 'column' }}>
						<TouchableOpacity style={styles.addRemoveQuantity} onPress={() => setQty(qty + 1)}>
							<Text style={{ top: 2, right: 1 }}> +</Text>
						</TouchableOpacity>
						<Text style={{ fontSize: 20, right: 17 }}>{qty}</Text>
						<TouchableOpacity style={styles.addRemoveQuantity} onPress={() => qty > 1 && setQty(qty - 1)}>
							<Text style={{ fontSize: 20 }}>-</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ alignItems: 'flex-end', bottom: 40 }}>
					<TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart() 
               
                    } >
						<Text style={{ top: 7 }}>Add to Cart</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export const CartCard = ({ id, title, price, image, qty, total }) => {
	const dispatch = useDispatch();

	function removeFromCart() {
		const data = {id, title, price, qty, total };
		dispatch(removeProduct(data));
	}
	return (
		<View style={styles.container}>
			<View>
				<Image style={styles.imgStyle} source={{ uri: image }} />
			</View>
			<View style={{ width: 190, height: 190, borderRadius: 10 }}>
				<View style={{ alignItems: 'center' }}>
					<Text style={styles.productName}>{title}</Text>
                    {/* <Text style={{color: 'red', fontSize: 17, backgroundColor: 'yellow'}}>{id}</Text> */}
				</View>
				<Text>-----------------------</Text>

				<View style={{ flexDirection: 'row' }}>
					<View>
						<View style={{ flexDirection: 'row', left: 10 }}>
							<Text style={{ fontSize: 17, fontFamily: 'bold' }}>Total Price</Text>
							<Text style={{ fontSize: 17, fontFamily: 'bold' }}>=</Text>
							<Text style={{ fontSize: 17 }}>${price}</Text>
						</View>
						<View style={{ flexDirection: 'row', left: 10 }}>
							<Text style={{ fontSize: 17, fontFamily: 'bold' }}>Quantity</Text>
							<Text style={{ fontSize: 17, fontFamily: 'bold' }}>=</Text>
							<Text style={{ fontSize: 17 }}>{qty}</Text>
						</View>
					</View>
					<View>
						<View style={{ alignItems: 'flex-end', flexDirection: 'column' }}>
							<TouchableOpacity style={styles.removeProduct} onPress={() => removeFromCart()}>
								<AndDesign style={{ fontSize: 22, color: 'red', top: 7 }} name="delete" />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor:'green',
		flexDirection: 'row',
		borderRadius: 10,
		padding: 10
	},

	productName: {
		fontSize: 20
	},
	imgStyle: {
		width: 150,
		height: 150,
		borderRadius: 10
	},

	cartQuantity: {
		position: 'absolute',
		left: 310,
		fontSize: 25,
		top: -45,
		backgroundColor: 'yellow',
		height: 30,
		borderRadius: 15,
		width: 30
	},

	addToCartButton: {
		backgroundColor: 'lightgrey',
		borderRadius: 10,
		width: 90,
		alignItems: 'center',
		alignSelf: 'center',
		height: 35
	},
	subToal: {
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor:'green',
		flexDirection: 'row',
		borderRadius: 10,
		padding: 10,
		top: 5
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
		backgroundColor: 'lightgrey',
		borderRadius: 5,
		width: 25,
		alignItems: 'center',
		height: 25,
		right: 17
	},
	removeProduct: {
		backgroundColor: 'lightgrey',
		borderRadius: 20,
		width: 40,
		alignItems: 'center',
		height: 40,
		top: 50
	}
});

export default productCard;
