import { authenticator } from '../utils/auth';
import { decode } from '../utils/decode';

export const onRequest = [decode, authenticator];