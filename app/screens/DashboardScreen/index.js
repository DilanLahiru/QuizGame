import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Stack, Text, Image} from 'native-base';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../components/theme/index';
import {styles} from './style';
import LottieView from 'lottie-react-native';
import Play from '../../assets/icons/play.png';
import LeaderBoad from '../../assets/icons/leaderBoard.png';
import history from '../../assets/icons/scoreSheet.png';
import profile from '../../assets/icons/user.png';
import logout from '../../assets/icons/logout.png';

import {MenuModal} from '../../components/modal/MenuModal';
import {getAccessToken, clearLocalStorage} from '../../utils/localStorage';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [scanModalOpen, setScanModalOpen] = useState({
    show: false,
  });

  const [loginUserData, setLoginUserData] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    getUserToken();
  }, []);

  const getUserToken = async () => {
    const data = await getAccessToken('userData');
    setLoginUserData(data.user);
  };

  const logOutUser = async () => {
    const data = await clearLocalStorage();
    console.log(data);
    navigation.navigate('loading');
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Stack style={styles.mainView}>
        <Stack style={styles.headerView}>
          <Stack style={styles.iconView}>
            <LottieView
              source={require('../../assets/lottie/avatar.json')}
              speed={0.9}
              autoPlay
              loop
              style={styles.icon}
              resizeMode="cover"
            />
          </Stack>
          <Stack style={styles.headTxtView}>
            <Text fontSize={'2xl'} fontWeight={800} color={'#fff'}>
              HI {loginUserData.name}
            </Text>
            <Text fontSize={'lg'} fontWeight={600} color={'#fff'}>
              WELCOME BACK
            </Text>
          </Stack>
        </Stack>
        <Stack style={styles.bodyView}>
          <TouchableOpacity
            onPress={() => {
              setScanModalOpen({
                show: true,
              });
            }}>
            <Stack style={styles.cardView}>
              <Stack style={styles.cardIcon}>
                <Image
                  source={Play}
                  width={SCREEN_WIDTH * 0.1}
                  height={SCREEN_HEIGHT * 0.06}
                  alt="no results"
                />
              </Stack>
              <Text fontSize={'xl'} fontWeight={600} color={'#fff'}>
                START GAME
              </Text>
            </Stack>
          </TouchableOpacity>
          {/* ------------------------------------------- */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('leaderBoard');
            }}>
            <Stack style={styles.cardView}>
              <Stack style={styles.cardIcon}>
                <Image
                  source={LeaderBoad}
                  width={SCREEN_WIDTH * 0.1}
                  height={SCREEN_HEIGHT * 0.06}
                  alt="no results"
                />
              </Stack>
              <Text fontSize={'xl'} fontWeight={600} color={'#fff'}>
                LEADER BOARD
              </Text>
            </Stack>
          </TouchableOpacity>
          {/* ------------------------------------------- */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('myScore');
            }}>
            <Stack style={styles.cardView}>
              <Stack style={styles.cardIcon}>
                <Image
                  source={history}
                  width={SCREEN_WIDTH * 0.1}
                  height={SCREEN_HEIGHT * 0.06}
                  alt="no results"
                />
              </Stack>
              <Text fontSize={'xl'} fontWeight={600} color={'#fff'}>
                MY SCORE
              </Text>
            </Stack>
          </TouchableOpacity>
          {/* ------------------------------------------- */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('profile');
            }}>
            <Stack style={styles.cardView}>
              <Stack style={styles.cardIcon}>
                <Image
                  source={profile}
                  width={SCREEN_WIDTH * 0.12}
                  height={SCREEN_HEIGHT * 0.06}
                  alt="no results"
                />
              </Stack>
              <Text fontSize={'xl'} fontWeight={600} color={'#fff'}>
                PROFILE
              </Text>
            </Stack>
          </TouchableOpacity>
          {/* ------------------------------------------- */}
          <TouchableOpacity
            onPress={() => {
              logOutUser();
            }}>
            <Stack style={styles.cardView}>
              <Stack style={styles.cardIcon}>
                <Image
                  source={logout}
                  width={SCREEN_WIDTH * 0.12}
                  height={SCREEN_HEIGHT * 0.06}
                  alt="no results"
                />
              </Stack>
              <Text fontSize={'xl'} fontWeight={600} color={'#fff'}>
                LOG OUT
              </Text>
            </Stack>
          </TouchableOpacity>
        </Stack>
      </Stack>
      <MenuModal
        show={scanModalOpen.show}
        onHide={() => setScanModalOpen({show: false})}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default DashboardScreen;
