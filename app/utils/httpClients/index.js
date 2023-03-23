import axios from 'axios';
import {getAccessToken} from '../localStorage';

export default axios.create({
  BASE: 'http://ec2-13-213-8-136.ap-southeast-1.compute.amazonaws.com:3000/',
});
