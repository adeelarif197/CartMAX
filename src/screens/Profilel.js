import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function Profile({navigation}) {
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
                navigation.navigate('LoginScreen');
              });
          }}>
          SignOut
        </Button>
      </View>
    );
  }

  const styles = StyleSheet.create({
    textinput: {
      width: '80%',
      alignSelf: 'center',
      marginTop: 10,
    },
})