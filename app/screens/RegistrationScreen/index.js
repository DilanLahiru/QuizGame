import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Stack, Text, Heading, HStack, Input, Button} from 'native-base';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../components/theme/index';
import {styles} from './style';
import LottieView from 'lottie-react-native';

import {registrationActionService} from './service/index';
import Toast from 'react-native-toast-message';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  //const [featuredCategories, setFeaturedCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const getName = text => {
    setName(text);
  };

  const getEmailAddress = text => {
    setEmailAddress(text);
  };

  const getPassword = text => {
    setPassword(text);
  };

  const getConfirmPassword = text => {
    setConfirmPassword(text);
  };

  const registerUser = async () => {
    let obj = {
      name: name,
      realm: name,
      username: emailAddress,
      email: emailAddress,
      password: password,
      emailVerified: true,
    };
    try {
      const {data} = await registrationActionService(obj);
      console.log('FUNCTION CALLING');
      console.log(data);
      if (data === undefined) {
        Toast.show({
          type: 'error',
          text1: 'QUIZ GAME',
          text2: 'REGISTRATION FAILED',
        });
      }
      if (data) {
        Toast.show({
          type: 'success',
          text1: 'QUIZ GAME',
          text2: 'SUCCESSFULLY REGISTRAR',
        });
        setTimeout(() => {
          navigation.navigate('login');
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Stack style={styles.mainView}>
        <Stack style={styles.iconView}>
          <LottieView
            source={require('../../assets/lottie/register.json')}
            speed={0.8}
            autoPlay
            loop
            style={styles.icon}
            resizeMode="cover"
          />
        </Stack>
        <Stack style={styles.textView}>
          <Text fontSize={'3xl'} fontWeight={800} color={'#512E5F'}>
            REGISTER
          </Text>
        </Stack>
        <Stack style={styles.textInputView}>
          <Stack style={styles.labelView}>
            <Text fontSize={'sm'} fontWeight={600} color={'#512E5F'}>
              NAME
            </Text>
          </Stack>
          <Input
            mt={2}
            variant="unstyled"
            w={SCREEN_WIDTH * 0.8}
            h={SCREEN_HEIGHT * 0.05}
            fontSize={'md'}
            onChangeText={value => {
              getName(value);
            }}
            value={name}
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
          {/* ---------------------------------------- */}
          <Stack style={styles.labelView}>
            <Text fontSize={'sm'} fontWeight={600} color={'#512E5F'}>
              EMAIL ADDRESS
            </Text>
          </Stack>
          <Input
            mt={2}
            variant="unstyled"
            w={SCREEN_WIDTH * 0.8}
            h={SCREEN_HEIGHT * 0.05}
            fontSize={'md'}
            onChangeText={value => {
              getEmailAddress(value);
            }}
            value={emailAddress}
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
          {/* ---------------------------------------- */}
          <Stack mt={3} style={styles.labelView}>
            <Text fontSize={'sm'} fontWeight={600} color={'#512E5F'}>
              PASSWORD
            </Text>
          </Stack>
          <Input
            mt={2}
            variant="unstyled"
            w={SCREEN_WIDTH * 0.8}
            h={SCREEN_HEIGHT * 0.05}
            fontSize={'md'}
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
          {/* ---------------------------------------- */}
          <Stack mt={3} style={styles.labelView}>
            <Text fontSize={'sm'} fontWeight={600} color={'#512E5F'}>
              CONFIRM PASSWORD
            </Text>
          </Stack>
          <Input
            mt={2}
            variant="unstyled"
            w={SCREEN_WIDTH * 0.8}
            h={SCREEN_HEIGHT * 0.05}
            fontSize={'md'}
            onChangeText={value => {
              getConfirmPassword(value);
            }}
            value={confirmPassword}
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
          {/* ---------------------------------------- */}
          <Stack mt={3} style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => {
                //navigation.navigate('dashboard');
                registerUser();
              }}>
              <Stack style={styles.button}>
                <Text fontSize={'md'} fontWeight={800} color={'#fff'}>
                  COMPLETE
                </Text>
              </Stack>
            </TouchableOpacity>
          </Stack>
        </Stack>
      </Stack>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
