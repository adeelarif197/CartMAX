import { View, Text, StyleSheet, Image,} from 'react-native'
import React, {useState, useEffect} from 'react';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginScreen({navigation}) {
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
        <Text style={styles.titletext}>CartMax</Text>
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
          style={styles.button}
          onPress={() => {
            auth()
              .signInWithEmailAndPassword(emailAddress, pass)
              .then(() => {
                alert('Successfully Signed In')
                console.log('User account signed in!');
                navigation.navigate('Card');
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
        <Button mode="text" onPress={() => navigation.navigate('SignUpScreen')}>
          SignUp
        </Button>
      </View>
    );
  }

  const styles = StyleSheet.create({
    textinput: {
      height:45,
      width: '80%',
      alignSelf: 'center',
      marginTop: 10,
    },
    button: {
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
      fontSize:18,
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