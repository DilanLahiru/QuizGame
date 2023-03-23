import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../components/theme';

export const styles = StyleSheet.create({
  mainView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  safeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  textView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.08,
    //backgroundColor: 'yellow',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iconView: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.25,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SCREEN_HEIGHT * 0.07,
  },
  icon: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_HEIGHT * 0.25,
    // margin: scale(10),
    alignSelf: 'center',
  },
  textInputView: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.5,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  labelView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.03,
    //backgroundColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'silver',
  },
  buttonView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.08,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_HEIGHT * 0.055,
    backgroundColor: '#512E5F',
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    //elevation: 2,
  },
  regTxtView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.08,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
