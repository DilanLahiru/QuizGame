/* eslint-disable react-hooks/exhaustive-deps */
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Stack, Text, Heading, HStack, Input, Image, Button} from 'native-base';
import React, {useEffect, useState, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../components/theme/index';
import {selectGameType} from '../../reducer/GameReducer';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';
import back from '../../assets/icons/roundedBack.png';
import {setGame} from '../../reducer/GameReducer';

import {GameOver} from '../../components/modal/GameOver';

// ** Interval Id;
let interval;

const GameScreen = () => {
  const navigation = useNavigation();
  const gameSelectType = useSelector(selectGameType);
  const dispatch = useDispatch();
  //const [featuredCategories, setFeaturedCategories] = useState([]);
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
    console.log('GAME TYPE');
    console.log(gameSelectType);
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
      console.log('calling');
      console.log(seconds);
    }, 1000);
  };

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(interval);
      setScoreValue();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  useEffect(() => {
    startup();
  }, []);

  const setScoreValue = () => {
    dispatch(
      setGame({
        gameScore: answerCount,
      }),
    );
    setScanModalOpen({
      show: true,
    });
  };

  const newgame = () => {
    //clearInterval(interval);
    startup();
    setSeconds(60);
    countDown();
  };

  const compare = () => Math.random() - 0.5;

  const startQuest = async data => {
    const randomNumbers = [];
    for (let i = 0; i < 3; i++) {
      randomNumbers.push(Math.floor(Math.random() * 20) + 1);
    }
    // const parsed = JSON.parse(data);
    // console.log(parsed);
    await setQuest(data.question);
    console.log(data);
    setSolution(data.solution);
    randomNumbers.push(data.solution);
    let arr = randomNumbers.sort(compare);
    setAnswers(arr);
  };

  const fetchText = async () => {
    const response = await axios.get(
      'https://marcconrad.com/uob/smile/api.php',
    );
    console.log('RESPONSE---------');
    console.log(response);
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
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
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
            //width={45}
            //height={45}
            width={SCREEN_WIDTH * 0.1}
            height={SCREEN_HEIGHT * 0.06}
            alt="no results"
            //resizeMode="contain"
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
