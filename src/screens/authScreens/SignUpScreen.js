import { View, Text, StyleSheet,Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SignUpScreen({navigation}) {
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
        <Text style={styles.titletext}>CartMax</Text>
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
          style={styles.button}
          onPress={() => {
            auth()
              .createUserWithEmailAndPassword(createEmail, createPass)
              .then(() => {
                alert('Successfully Signed Up')
                console.log('User account created & signed in!');
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
          SignUp
        </Button>
        <Text style={styles.calltoact}>Already have an account?</Text>
        <Button mode="text" onPress={() => navigation.navigate('Login')}>
          Login
        </Button>
      </View>
    );
  }

  const styles = StyleSheet.create({
    textinput: {
      height: 45,
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