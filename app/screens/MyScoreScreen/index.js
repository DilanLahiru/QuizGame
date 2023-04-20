import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import {Stack, Text, Image} from 'native-base';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../components/theme/index';
import {styles} from './style';
import back from '../../assets/icons/roundedBack.png';
import moment from 'moment';

import {getAccessToken} from '../../utils/localStorage';
import {getMyScore} from './service/index';

const MyScoreScreen = () => {
  const navigation = useNavigation();
  const [myScore, setMyScore] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await getAccessToken('userData');
    if (userData) {
      const response = await getMyScore(userData.userId);
      setMyScore(response.data);
    }
  };

  /**
   * Render Result Card Ui
   * @param {*} param
   * @returns
   */
  const renderDelivery = ({item}) => {
    return (
      <>
        <Stack style={styles.cardView}>
          <Stack style={styles.cardBodyView}>
            <Text fontSize={'md'} fontWeight={800} color={'#fff'}>
              score : {item.score}
            </Text>
            <Text fontSize={'md'} fontWeight={800} color={'#fff'}>
              {moment(new Date()).format('YYYY-MM-DD')}
            </Text>
          </Stack>
          <Stack
            style={{
              width: SCREEN_WIDTH * 0.8,
              height: SCREEN_HEIGHT * 0.04,
              //backgroundColor: 'green',
            }}>
            <Text fontSize={'md'} fontWeight={800} color={'#fff'}>
              Difficulty Level :{' '}
              {item.movement === 1
                ? 'Easy'
                : item.movement === 2
                ? 'Medium'
                : item.movement === 3
                ? 'Hard'
                : 'Easy'}
            </Text>
          </Stack>
        </Stack>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Stack style={styles.mainView}>
        <Stack style={styles.headerView}>
          <Stack style={styles.headTxtView}>
            <Text fontSize={'2xl'} fontWeight={800} ml={10} color={'#fff'}>
              MY SCORE
            </Text>
          </Stack>
          <Stack style={styles.iconView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('dashboard');
              }}>
              <Image
                source={back}
                alt="no results"
                width={45}
                height={45}
                mt={3}
              />
            </TouchableOpacity>
          </Stack>
        </Stack>
        <FlatList
          style={styles.listView}
          data={myScore}
          renderItem={data => renderDelivery(data)}
          keyExtractor={item => item._id}
          numColumns={0}
        />
      </Stack>
    </SafeAreaView>
  );
};

export default MyScoreScreen;
