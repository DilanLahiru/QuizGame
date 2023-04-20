import React, {useEffect, useState, useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Stack, Text, Button, Modal} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {selectGameType} from '../../../reducer/GameReducer';
import {saveGameScoreData} from './service/index';
import {getAccessToken} from '../../../utils/localStorage';
import Toast from 'react-native-toast-message';

let userData;
export function GameOver(props) {
  const {show, onClose, onHide, navigation} = props;

  const gameData = useSelector(selectGameType);
  const dispatch = useDispatch();

  // Handle Navigation Screen
  const navigateScreen = (screen, screenProps = {}) => {
    navigation.navigate(screen, {
      ...screenProps,
    });
  };

  useEffect(() => {
    getUserData();
  });

  const getUserData = async () => {
    console.log('1111111111111111111');
    userData = await getAccessToken('userData');
    console.log(userData);
  };

  useEffect(() => {
    console.log('GAME SCORE');
    console.log(gameData);
  }, [gameData]);

  const saveGameData = async () => {
    console.log('Aaaaaaaaaaa');
    console.log(gameData);
    console.log('GAME TYPE');
    console.log(gameData.gameLevel);
    let obj = {
      score: gameData.gameScore,
      movement:
        gameData.gameLevel === 'EASY'
          ? 1
          : gameData.gameLevel === 'MEDIUM'
          ? 2
          : gameData.gameLevel === 'HARD'
          ? 3
          : 0,
      client_score_id: userData.userId,
    };
    console.log('OBJ');
    console.log(obj);
    const response = await saveGameScoreData(obj);
    console.log(response);
    if (response === undefined) {
      Toast.show({
        type: 'error',
        text1: 'QUIZ GAME',
        text2: 'FAILED',
      });
    }
    if (response) {
      onHide();
      Toast.show({
        type: 'success',
        text1: 'QUIZ GAME',
        text2: 'SCORE SAVE SUCCESS',
      });
      setTimeout(() => {
        navigation.navigate('dashboard');
      }, 1000);
    }
  };

  return (
    <Modal
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
          <Text fontSize={'2xl'} fontWeight={800} color={'#512E5F'}>
            GAME OVER
          </Text>
        </Stack>
        <Stack style={styles.modalBody}>
          <LottieView
            source={require('../../../assets/lottie/timesUp.json')}
            speed={0.8}
            autoPlay
            loop
            style={styles.icon}
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => {
              saveGameData();
            }}>
            <Stack style={styles.button}>
              <Text fontSize={'md'} fontWeight={600} color={'#fff'}>
                DONE
              </Text>
            </Stack>
          </TouchableOpacity>
        </Stack>
      </Modal.Content>
    </Modal>
  );
}

GameOver.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  onHide: PropTypes.func,
  navigation: PropTypes.any,
};

export default GameOver;
