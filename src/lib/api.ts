import axios from 'axios';

import { type SendGridOptions } from './types';

const axiosInstance = axios.create({ baseURL: process.env.EXPO_PUBLIC_API_URL });

export const sendEmail = async (data: SendGridOptions): Promise<void> => {
  try {
    await axiosInstance.post('/mail/send', data);
    console.log(process.env.EXPO_PUBLIC_API_URL);
  } catch (error) {
    console.error(error);
  }
};
