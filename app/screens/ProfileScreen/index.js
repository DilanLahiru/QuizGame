import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Stack, Text, Input, Image} from 'native-base';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../components/theme/index';
import {styles} from './style';
import back from '../../assets/icons/roundedBack.png';
import avatar from '../../assets/icons/avatar.png';
import {getAccessToken} from '../../utils/localStorage';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [profileData, setProfileData] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const data = await getAccessToken('userData');
    console.log(data);
    setProfileData(data.user);
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Stack style={styles.mainView}>
        <Stack style={styles.headerView}>
          <Stack style={styles.headTxtView}>
            <Text fontSize={'2xl'} fontWeight={800} ml={10} color={'#fff'}>
              PROFILE SCREEN
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
        <Stack mt={5} style={styles.avatarIconView}>
          <Image
            source={avatar}
            alt="no results"
            width={200}
            height={200}
            //mt={3}
          />
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
            value={profileData.name}
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
              USER NAME
            </Text>
          </Stack>
          <Input
            mt={2}
            variant="unstyled"
            w={SCREEN_WIDTH * 0.8}
            h={SCREEN_HEIGHT * 0.05}
            fontSize={'md'}
            value={profileData.username}
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
            value={profileData.email}
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
            <TouchableOpacity>
              <Stack style={styles.button}>
                <Text fontSize={'md'} fontWeight={800} color={'#fff'}>
                  UPDATE
                </Text>
              </Stack>
            </TouchableOpacity>
          </Stack>
        </Stack>
      </Stack>
    </SafeAreaView>
  );
};

export default ProfileScreen;
