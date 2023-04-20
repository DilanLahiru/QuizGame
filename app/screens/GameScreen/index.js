/* eslint-disable react-hooks/exhaustive-deps */
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Stack, Text, Image} from 'native-base';
import React, {useEffect, useState, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../components/theme/index';
import {selectGameType} from '../../reducer/GameReducer';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';
import back from '../../assets/icons/roundedBack.png';
import {setGame} from '../../reducer/GameReducer';
import {GameOver} from '../../components/modal/GameOver';

import {loadQuestions} from './service/index';

// ** Interval Id;
let interval;

const GameScreen = () => {
  const navigation = useNavigation();
  const gameSelectType = useSelector(selectGameType);
  const dispatch = useDispatch();
  const [quest, setQuest] = useState('');
  const [solution, setSolution] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [seconds, setSeconds] = useState(60);
  const [answerCount, setAnswerCount] = useState(0);
  const [scanModalOpen, setScanModalOpen] = useState({
    show: false,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    if (gameSelectType.gameLevel === 'EASY') {
      setSeconds(360);
    } else if (gameSelectType.gameLevel === 'MEDIUM') {
      setSeconds(240);
    } else if (gameSelectType.gameLevel === 'HARD') {
      setSeconds(30);
    }
    countDown();
    return () => clearInterval(interval);
  }, []);

  const countDown = () => {
    interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
  };

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(interval);
      setScoreValue();
    }
  }, [seconds]);

  useEffect(() => {
    startup();
  }, []);

  const setScoreValue = () => {
    dispatch(
      setGame({
        gameLevel: gameSelectType.gameLevel,
        gameScore: answerCount,
      }),
    );
    setScanModalOpen({
      show: true,
    });
  };

  const compare = () => Math.random() - 0.5;

  const startQuest = async data => {
    const randomNumbers = [];
    for (let i = 0; i < 3; i++) {
      randomNumbers.push(Math.floor(Math.random() * 20) + 1);
    }
    await setQuest(data.question);
    setSolution(data.solution);
    randomNumbers.push(data.solution);
    let arr = randomNumbers.sort(compare);
    setAnswers(arr);
  };

  const fetchText = async () => {
    const response = await loadQuestions();
    startQuest(response.data);
  };

  const startup = () => {
    fetchText();
  };

  const submitAnswer = selectAnswer => {
    if (selectAnswer === solution) {
      setAnswerCount(answerCount + 1);
      fetchText();
    } else {
      if (answerCount !== 0) {
        setAnswerCount(answerCount - 1);
      }
    }
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const second = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${second}`;
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Stack style={styles.mainView}>
        <Stack style={styles.headerView}>
          <Stack style={styles.headTxtView}>
            <Text fontSize={'lg'} fontWeight={500} color={'#fff'}>
              DIFFICULTY LAVAL : {gameSelectType.gameLevel}
            </Text>
            <Text fontSize={'md'} fontWeight={500} color={'#fff'}>
              TIME LEFT : {formatTime(seconds)}
            </Text>
          </Stack>
          <Image
            marginLeft={10}
            source={back}
            width={SCREEN_WIDTH * 0.1}
            height={SCREEN_HEIGHT * 0.06}
            alt="no results"
          />
        </Stack>
        <Stack style={styles.bodyView}>
          <Stack style={styles.scoreView}>
            <Text fontSize={'2xl'} fontWeight={800} color={'#000'}>
              SCORE : {answerCount}
            </Text>
          </Stack>
          <Image
            alt="image"
            source={{
              uri: quest,
            }}
            resizeMode={'stretch'}
            style={{
              //resizeMode: 'cover',
              width: SCREEN_WIDTH * 0.95,
              height: SCREEN_HEIGHT * 0.3,
            }}
          />
          <Stack style={styles.answerView}>
            {answers.map(item => (
              <TouchableOpacity
                onPress={() => {
                  submitAnswer(item);
                }}>
                <Stack style={styles.answerBtn}>
                  <Text fontSize={'md'} fontWeight={600} color={'#fff'}>
                    {item}
                  </Text>
                </Stack>
              </TouchableOpacity>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <GameOver
        show={scanModalOpen.show}
        onHide={() => setScanModalOpen({show: false})}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default GameScreen;
