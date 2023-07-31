import {Image, Text, View} from 'react-native';
import React from 'react';
import Styles from './WelcomeScreenStyles';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Images, colors} from '../../../Constant';
const WelcomeScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.welcomeTxt}>Welcome to WhatsApp</Text>
      <Image source={Images.welcomeImg} style={Styles.imgStyle} />

      <Text style={Styles.agreeTxt}>
        Read our  <Text style={{color:colors.MEISSEN_BLUE}}>Privacy Policy.</Text> Tap “Agree and continue” to accept the <Text style={{color:colors.MEISSEN_BLUE}}> Teams of
        Service.</Text>
      </Text>
    </View>
  );
};

export default WelcomeScreen;
