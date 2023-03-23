import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../components/theme';

export const styles = StyleSheet.create({
  mainView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#512E5F',
  },
  safeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  textView: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_HEIGHT * 0.15,
    //backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconView: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.25,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_HEIGHT * 0.3,
    // margin: scale(10),
    alignSelf: 'center',
  },
});
