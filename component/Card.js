import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Position from 'react-native/Libraries/Components/Touchable/Position';
import AndDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './Redux/Store/Reducers/cartReducer';
import ProductCard from './productCard';

export default function Card({ navigation }) {
	const items = useSelector((state) => state.cartReducer.items);
	var count = 0;
	items.map((item) => (count = count + item.quantity));

	const products = [
		{
			id: 1,
			title: 'Nike Shoes',
			desc: 'Write Description Here',
			price: 10,
			image: 'https://image.shutterstock.com/image-photo/chisinau-moldova-february-7-2017-260nw-622954634.jpg'
		},
		{
			id: 2,
			title: 'T Shirts',
			desc: 'Write Description Here',
			price: 20,
			image: 'https://m.media-amazon.com/images/I/71HuLCyNNhL._AC_UX569_.jpg'
		},
		{
			id: 3,
			title: 'Trousers',
			desc: 'Write Description Here',
			price: 30,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8xsaEBUZpZaX4BwG2oa8jkovkVHfimEp-Q&usqp=CAU'
		},
		{
			id: 4,
			title: 'Jackets',
			desc: 'Write Description Here',
			price: 40,
			image:
				'https://static4.depositphotos.com/1013245/356/i/450/depositphotos_3561159-stock-photo-luxuru-black-leather-jacket-isolated.jpg'
		},
		{
			id: 5,
			title: 'Socks',
			desc: 'Write Description Here',
			price: 50,
			image:
				'https://static9.depositphotos.com/1000133/1073/i/450/depositphotos_10735545-stock-photo-socks-on-white.jpg'
		},
		{
			id: 6,
			title: 'Jeans',
			desc: 'Write Description Here',
			price: 60,
			image:
				'https://st2.depositphotos.com/4071389/7274/i/450/depositphotos_72740849-stock-photo-four-pairs-of-blue-jeans.jpg'
		}
	];

	return (
		<ScrollView contentContainerStyle={{ flexDirection: 'column' }}>
			{count == 0 || <Text style={styles.cartQuantity}>{count}</Text>}
			<TouchableOpacity style={{ left: 300 }} onPress={() => navigation.navigate('Cart')}>
				<AndDesign style={{ fontSize: 40, color: 'green', top: 20 }} name="shoppingcart" />
			</TouchableOpacity>

			{products.map((item, id) => (
				<ProductCard key={id} title={item.title} price={item.price} desc={item.desc} image={item.image} id={item.id}/>
			))}
		</ScrollView>
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

	productName: {
		fontSize: 20
	},
	imgStyle: {
		width: 150,
		height: 150,
		borderRadius: 20
	},

	cartQuantity: {
		position: 'absolute',
		left: 310,
		fontSize: 22,
		backgroundColor: 'lightgrey',
		height: 30,
		borderRadius: 15,
		width: 30,
		textAlign: 'center'
	},

	buyButton: {
		backgroundColor: 'yellow',
		borderRadius: 20,
		width: 80,
		alignItems: 'center',
		height: 25
	}
});
