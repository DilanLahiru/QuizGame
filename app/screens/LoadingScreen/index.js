import {SafeAreaView} from 'react-native';
import {Stack, Text} from 'native-base';
import React, {useEffect, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import LottieView from 'lottie-react-native';
import {getAccessToken} from '../../utils/localStorage';

const LoadingScreen = () => {
  const navigation = useNavigation();
  //const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    getToken();
  });

  const getToken = async () => {
    const response = await getAccessToken('userToken');
    if (response) {
      setTimeout(() => {
        navigation.navigate('dashboard');
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.navigate('login');
      }, 2000);
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Stack style={styles.mainView}>
        <Stack style={styles.textView}>
          <Text fontSize={'4xl'} fontWeight={800} color={'#fff'}>
            WELCOME
          </Text>
          <Text fontSize={'2xl'} fontWeight={800} color={'#fff'}>
            QUIZ GAME
          </Text>
        </Stack>
        <Stack style={styles.iconView}>
          <LottieView
            source={require('../../assets/lottie/logo.json')}
            speed={0.8}
            autoPlay
            loop
            style={styles.icon}
            resizeMode="cover"
          />
        </Stack>
      </Stack>
    </SafeAreaView>
  );
};

export default LoadingScreen;
