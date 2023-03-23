import React, {useEffect, useState, useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Stack, Text, Button, Modal} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../theme/index';
import {styles} from './style';
import {useDispatch} from 'react-redux';
import {setGame} from '../../reducer/GameReducer';

export function MenuModal(props) {
  const {show, onClose, onHide, navigation} = props;

  const dispatch = useDispatch();

  // Handle Navigation Screen
  const navigateScreen = (screen, screenProps = {}) => {
    navigation.navigate(screen, {
      ...screenProps,
    });
  };

  const selectGameType = gameType => {
    dispatch(
      setGame({
        gameLevel: gameType,
      }),
    );
    navigation.navigate('game');
  };

  return (
    <Modal
      justifyContent="flex-end"
      bottom="-4"
      animationType="slide"
      backdropOpacity={0.5}
      closeOnOverlayClick={true}
      isOpen={show}
      onClose={() => {
        if (onHide) {
          onHide();
        }
      }}>
      <Modal.Content style={styles.modal}>
        <Stack style={styles.modalHeader}>
          <Text fontSize={'xl'} fontWeight={800} color={'#512E5F'}>
            SELECT GAME LAVAL
          </Text>
        </Stack>
        <Stack style={styles.modalBody}>
          <TouchableOpacity
            onPress={() => {
              selectGameType('EASY');
              onHide();
            }}>
            <Stack style={styles.cardView}>
              <Text fontSize={'lg'} fontWeight={600} color={'#fff'}>
                EASY
              </Text>
            </Stack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              selectGameType('MEDIUM');
              onHide();
            }}>
            <Stack mt={SCREEN_HEIGHT * 0.01} style={styles.cardView}>
              <Text fontSize={'lg'} fontWeight={600} color={'#fff'}>
                MEDIUM
              </Text>
            </Stack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              selectGameType('HARD');
              onHide();
            }}>
            <Stack mt={SCREEN_HEIGHT * 0.01} style={styles.cardView}>
              <Text fontSize={'lg'} fontWeight={600} color={'#fff'}>
                HARD
              </Text>
            </Stack>
          </TouchableOpacity>
        </Stack>
      </Modal.Content>
    </Modal>
  );
}

MenuModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  onHide: PropTypes.func,
  navigation: PropTypes.any,
};

export default MenuModal;
