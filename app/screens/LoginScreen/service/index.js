import axios from 'axios';

/**
 * Login Action Service
 * @param data
 * @returns User Data
 */
export const loginActionService = async data => {
  console.log(data);
  try {
    const response = await axios.post(
      'http://ec2-13-213-8-136.ap-southeast-1.compute.amazonaws.com:3000/api/clients/login',
      data,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
