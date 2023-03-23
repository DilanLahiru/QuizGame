import {BASE_URL} from './httpClients/index';

const MOBILE_PREFIX = '/api/';
const CLIENT_PREFIX = 'clients';

export const USER_LOGIN = `${BASE_URL}${MOBILE_PREFIX}${CLIENT_PREFIX}/login`; // POST
export const USER_REGISTRATION = `${MOBILE_PREFIX}${CLIENT_PREFIX}`; // POST
