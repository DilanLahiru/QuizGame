import axios from 'axios';

/**
 * Score Save Action Service
 * @param data
 * @returns response
 */
export const saveScoreActionService = async data => {
  try {
    const response = await axios.post(
      'http://ec2-13-213-8-136.ap-southeast-1.compute.amazonaws.com:3000/api/scores',
      data,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const loadQuestions = async data => {
  try {
    const response = await axios.get(
      'https://marcconrad.com/uob/smile/api.php',
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
