import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Stack, Text, Input} from 'native-base';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../components/theme/index';
import Toast from 'react-native-toast-message';
import {styles} from './style';
import LottieView from 'lottie-react-native';
import {loginActionService} from './service/index';
import {storeAccessToken, storeLoginUserData} from '../../utils/localStorage';
import {setLoginUserData} from '../../reducer/LoginReducer';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const getUserName = text => {
    setUserName(text);
  };

  const getPassword = text => {
    setPassword(text);
  };

  const userLogin = async () => {
    let obj = {
      username: userName,
      password: password,
    };
    const response = await loginActionService(obj);
    if (response === undefined) {
      Toast.show({
        type: 'error',
        text1: 'QUIZ GAME',
        text2: 'LOGIN FAILED',
      });
    }
    if (response) {
      Toast.show({
        type: 'success',
        text1: 'QUIZ GAME',
        text2: 'LOGIN SUCCESS',
      });
      storeAccessToken(response.data.id);
      storeLoginUserData(response.data);
      dispatch(setLoginUserData(response.data.user));
      setTimeout(() => {
        navigation.navigate('dashboard');
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Stack style={styles.mainView}>
        <Stack style={styles.iconView}>
          <LottieView
            source={require('../../assets/lottie/login.json')}
            speed={0.8}
            autoPlay
            loop
            style={styles.icon}
            resizeMode="cover"
          />
        </Stack>
        <Stack style={styles.textView}>
          <Text fontSize={'3xl'} fontWeight={800} color={'#512E5F'}>
            SIGN IN
          </Text>
        </Stack>
        <Stack style={styles.textInputView}>
          <Stack style={styles.labelView}>
            <Text fontSize={'sm'} fontWeight={600} color={'#512E5F'}>
              USER NAME
            </Text>
          </Stack>
          <Input
            mt={2}
            variant="unstyled"
            w={SCREEN_WIDTH * 0.8}
            h={SCREEN_HEIGHT * 0.055}
            fontSize={'lg'}
            onChangeText={value => {
              getUserName(value);
            }}
            value={userName}
            _focus={{
              style: {
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#512E5F',
                backgroundColor: 'white',
              },
            }}
            style={styles.input}
          />
          <Stack mt={3} style={styles.labelView}>
            <Text fontSize={'sm'} fontWeight={600} color={'#512E5F'}>
              PASSWORD
            </Text>
          </Stack>
          <Input
            mt={2}
            variant="unstyled"
            w={SCREEN_WIDTH * 0.8}
            secureTextEntry={true}
            h={SCREEN_HEIGHT * 0.055}
            fontSize={'lg'}
            onChangeText={value => {
              getPassword(value);
            }}
            value={password}
            _focus={{
              style: {
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#512E5F',
                backgroundColor: 'white',
              },
            }}
            style={styles.input}
          />
          <Stack mt={3} style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => {
                userLogin();
              }}>
              <Stack style={styles.button}>
                <Text fontSize={'md'} fontWeight={800} color={'#fff'}>
                  SIGN IN
                </Text>
              </Stack>
            </TouchableOpacity>
          </Stack>
          <Stack style={styles.regTxtView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('registration');
              }}>
              <Text fontSize={'xs'} fontWeight={800} color={'#512E5F'}>
                NEW TO APP ? CLICK HERE TO REGISTER
              </Text>
            </TouchableOpacity>
          </Stack>
        </Stack>
      </Stack>
    </SafeAreaView>
  );
};

export default LoginScreen;
