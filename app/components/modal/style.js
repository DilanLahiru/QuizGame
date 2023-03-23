import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../components/theme';

export const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    backgroundColor: '#fff',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.4,
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 5,
  },
  modalHeader: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.1,
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
});
