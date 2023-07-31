import {Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Styles from './SplashScreenStyles';
import {Images} from '../../../Constant';
import {Routes} from '../../../Navigation/Routes';

const SplashScreen = ({navigation}: any) => {
  setTimeout(() => {
    navigation.navigate(Routes.WELCOME_SCREEN);
  }, 2000);
  return (
    <View style={Styles.container}>
      <Image source={Images.splashImg} style={Styles.imgStyle} />
    </View>
  );
};

export default SplashScreen;
