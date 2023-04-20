import axios from 'axios';

export const getMyScore = async data => {
  try {
    const response = await axios.get(
      `http://ec2-13-213-8-136.ap-southeast-1.compute.amazonaws.com:3000/api/scores?filter={"where":{"client_score_id":${data}}}`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
