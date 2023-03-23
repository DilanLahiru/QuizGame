import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Stack, Text, Heading, HStack, Input, Image} from 'native-base';
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

const DashboardScreen = () => {
  const navigation = useNavigation();
  //const [featuredCategories, setFeaturedCategories] = useState([]);
  const [scanModalOpen, setScanModalOpen] = useState({
    show: false,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

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
              HI DILAN,
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
              //navigation.navigate('game');
            }}>
            <Stack style={styles.cardView}>
              <Stack style={styles.cardIcon}>
                <Image
                  source={Play}
                  //width={45}
                  //height={45}
                  width={SCREEN_WIDTH * 0.1}
                  height={SCREEN_HEIGHT * 0.06}
                  alt="no results"
                  //resizeMode="contain"
                />
              </Stack>
              <Text fontSize={'xl'} fontWeight={600} color={'#fff'}>
                START GAME
              </Text>
            </Stack>
          </TouchableOpacity>
          {/* ------------------------------------------- */}
          <TouchableOpacity>
            <Stack style={styles.cardView}>
              <Stack style={styles.cardIcon}>
                <Image
                  source={LeaderBoad}
                  //width={45}
                  //height={45}
                  width={SCREEN_WIDTH * 0.1}
                  height={SCREEN_HEIGHT * 0.06}
                  alt="no results"
                  //resizeMode="contain"
                />
              </Stack>
              <Text fontSize={'xl'} fontWeight={600} color={'#fff'}>
                LEADER BOARD
              </Text>
            </Stack>
          </TouchableOpacity>
          {/* ------------------------------------------- */}
          <TouchableOpacity>
            <Stack style={styles.cardView}>
              <Stack style={styles.cardIcon}>
                <Image
                  source={history}
                  // width={43}
                  // height={43}
                  width={SCREEN_WIDTH * 0.1}
                  height={SCREEN_HEIGHT * 0.06}
                  alt="no results"
                  //resizeMode="contain"
                />
              </Stack>
              <Text fontSize={'xl'} fontWeight={600} color={'#fff'}>
                MY SCORE
              </Text>
            </Stack>
          </TouchableOpacity>
          {/* ------------------------------------------- */}
          <TouchableOpacity>
            <Stack style={styles.cardView}>
              <Stack style={styles.cardIcon}>
                <Image
                  source={profile}
                  //width={45}
                  //height={45}
                  width={SCREEN_WIDTH * 0.12}
                  height={SCREEN_HEIGHT * 0.06}
                  alt="no results"
                  //resizeMode="contain"
                />
              </Stack>
              <Text fontSize={'xl'} fontWeight={600} color={'#fff'}>
                PROFILE
              </Text>
            </Stack>
          </TouchableOpacity>
          {/* ------------------------------------------- */}
          <TouchableOpacity>
            <Stack style={styles.cardView}>
              <Stack style={styles.cardIcon}>
                <Image
                  source={logout}
                  // width={43}
                  // height={43}
                  width={SCREEN_WIDTH * 0.12}
                  height={SCREEN_HEIGHT * 0.06}
                  alt="no results"
                  //resizeMode="contain"
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
