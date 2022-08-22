import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Cart from './src/screens/Cart';
import Products from './src/screens/Products';
import LoginScreen from './src/screens/authScreens/LoginScreen';
import SignUpScreen from './src/screens/authScreens/SignUpScreen';
import Profile from './src/screens/Profilel';

import StartingLottie from './component/startingLottie';
import Cart from './component/Cart';
import Card from './component/Card';
import { Provider } from 'react-redux';
import Store from './component/Redux/Store';

// function HomeScreen() {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'Cart') {
//             iconName = focused ? 'cart' : 'cart-outline';
//           } else if (route.name === 'Products') {
//             iconName = focused ? 'ios-basket' : 'ios-basket-outline';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'ios-person' : 'ios-person-outline';
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'indigo',
//         tabBarInactiveTintColor: 'gray',
//       })}>
//       <Tab.Screen name="Products" component={Products} />
//       <Tab.Screen name="Cart" component={Cart} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function App() {
	return (
		// <NavigationContainer>
		// 	<Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}>
		// 		<Stack.Screen name="LoginScreen" component={LoginScreen} />
		// 		<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
		//     <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home', headerBackVisible: false}}/>
		// 	</Stack.Navigator>
		// </NavigationContainer>

		<Provider store={Store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Lottie" component={StartingLottie} options={{ headerShown: false }} />
					<Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
					<Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Card" component={Card} options={{ headerShown: false }} />
					<Stack.Screen name="Cart" component={Cart} options={{ headerShown: true }} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;
