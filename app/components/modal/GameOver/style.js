import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../components/theme';

export const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    backgroundColor: '#fff',
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.4,
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
  },
  modalHeader: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.09,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    width: SCREEN_WIDTH * 0.8,
    height: 'auto',
    //paddingTop: SCREEN_HEIGHT * 0.03,
    paddingBottom: SCREEN_HEIGHT * 0.03,
    //backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardView: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_HEIGHT * 0.065,
    backgroundColor: '#512E5F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  icon: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_HEIGHT * 0.2,
  },
  button: {
    width: SCREEN_WIDTH * 0.45,
    height: 'auto',
    paddingTop: SCREEN_HEIGHT * 0.008,
    paddingBottom: SCREEN_HEIGHT * 0.008,
    backgroundColor: '#512E5F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: SCREEN_HEIGHT * 0.03,
  },
});
