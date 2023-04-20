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
  headerView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.15,
    backgroundColor: '#512E5F',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: SCREEN_HEIGHT * 0.03,
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  iconView: {
    width: SCREEN_WIDTH * 0.25,
    height: SCREEN_HEIGHT * 0.15,
    marginLeft: SCREEN_WIDTH * 0.13,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: SCREEN_WIDTH * 0.13,
    height: SCREEN_HEIGHT * 0.13,
    // margin: scale(10),
    alignSelf: 'center',
  },
  headTxtView: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_HEIGHT * 0.1,
    marginTop: 10,
    //backgroundColor: 'red',
    justifyContent: 'center',
  },
  bodyView: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.6,
    //backgroundColor: 'red',
    marginTop: SCREEN_HEIGHT * 0.04,
  },
  cardView: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.1,
    backgroundColor: '#512E5F',
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'row',
    borderRadius: 10,
    marginTop: SCREEN_HEIGHT * 0.02,
  },
  cardIcon: {
    width: SCREEN_WIDTH * 0.25,
    height: SCREEN_HEIGHT * 0.1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.08,
    //backgroundColor: 'yellow',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'silver',
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
  buttonView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.08,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SCREEN_HEIGHT * 0.03,
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
  avatarIconView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
