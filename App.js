import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cart from './src/screens/Cart';
import Products from './src/screens/Products';
//Hey This is Salman
function LoginScreen({navigation}) {
  const [emailAddress, setemailAddress] = useState('');
  const [pass, setpass] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center', }}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png',
        }}
      />
      <Text style={styles.titletext}>Cartmax</Text>
      <Text style={styles.actiontext}>Login to Your Account</Text>
      <TextInput
        style={styles.textinput}
        mode="outlined"
        label="Email Address"
        value={emailAddress}
        onChangeText={emailAddress => setemailAddress(emailAddress)}
      />
      <TextInput
        style={styles.textinput}
        mode="outlined"
        label="Password"
        value={pass}
        onChangeText={pass => setpass(pass)}
        secureTextEntry={passwordVisible}
        right={
          <TextInput.Icon
            name={passwordVisible ? 'eye' : 'eye-off'}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />
      <Button
        mode="contained"
        style={styles.textinput}
        onPress={() => {
          auth()
            .signInWithEmailAndPassword(emailAddress, pass)
            .then(() => {
              console.log('User account signed in!');
              navigation.navigate('Home');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }
              console.error(error);
            });
        }}>
        Login
      </Button>
      <Text style={styles.calltoact}>Don't have an account?</Text>
      <Button mode="text" onPress={() => navigation.navigate('SignUp')}>
        SignUp
      </Button>
    </View>
  );
}
function SignUpScreen({navigation}) {
  const [createEmail, setcreateEmail] = useState('');
  const [createPass, setcreatePass] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png',
        }}
      />
      <Text style={styles.titletext}>Cartmax</Text>
      <Text style={styles.actiontext}>Create Your Account</Text>
      <TextInput
        style={styles.textinput}
        mode="outlined"
        label="Email Address"
        value={createEmail}
        onChangeText={createEmail => setcreateEmail(createEmail)}
      />

      <TextInput
        style={styles.textinput}
        mode="outlined"
        label="Create Password"
        value={createPass}
        onChangeText={createPass => setcreatePass(createPass)}
      />
      <Button
        mode="contained"
        style={styles.textinput}
        onPress={() => {
          auth()
            .createUserWithEmailAndPassword(createEmail, createPass)
            .then(() => {
              console.log('User account created & signed in!');
              navigation.navigate('Home');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }
              console.error(error);
            });
        }}>
        SignUp
      </Button>
      <Text style={styles.calltoact}>Already have an account?</Text>
      <Button mode="text" onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
    </View>
  );
}
function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Products') {
            iconName = focused ? 'ios-basket' : 'ios-basket-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'indigo',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function Profile({navigation}) {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        mode="contained"
        style={styles.textinput}
        onPress={() => {
          auth()
            .signOut()
            .then(() => {
              console.log('User signed out!');
              navigation.navigate('Login');
            });
        }}>
        SignOut
      </Button>
    </View>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  textinput: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
  },
  titletext:{
    textAlign:'center',
    alignSelf:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'#080e2c'
  },
  actiontext:{
    fontSize:24,
    marginHorizontal:45,
    marginTop:20,
    fontWeight:'bold'
  },
  calltoact:{
    marginTop:20,
    fontSize:16,
    alignSelf:'center'
  }

});
export default App;
