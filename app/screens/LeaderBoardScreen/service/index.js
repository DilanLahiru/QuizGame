import axios from 'axios';

export const getLeaderBoard = async () => {
  try {
    const response = await axios.get(
      'http://ec2-13-213-8-136.ap-southeast-1.compute.amazonaws.com:3000/api/scores',
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
