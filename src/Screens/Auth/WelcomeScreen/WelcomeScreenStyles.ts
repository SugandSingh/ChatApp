import {StyleSheet} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {colors} from '../../../Constant';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(16),
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  welcomeTxt: {
    color: colors.BLACK,
    fontSize: 30,
    marginTop: verticalScale(60),
    fontWeight: 'bold',
  },
  imgStyle: {
    width: moderateVerticalScale(250),
    height: moderateScale(250),
    marginTop: verticalScale(60),
  },
  agreeTxt: {
    color: colors.BLACK,
    fontSize: 14,
    marginTop: verticalScale(60),
    textAlign:'center'
  },
});

export default Styles;
