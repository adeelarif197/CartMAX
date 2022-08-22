import React,{useEffect,useRef } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function StartingLottie({navigation})  {

  const animation = useRef(null)
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation}
          autoPlay
          loop={false}
          style={{
            position:'absolute',
            width: 300,
            height: 300,
            backgroundColor: 'white',
          }}
          onAnimationFinish={()=>{
            navigation.replace('LoginScreen')
          }}
          speed={1.5}
          source={require('../assets/83548-online-shopping-black-friday.json')} />
  
      </View>
    );
  }


const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
