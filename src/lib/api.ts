import { type SendGridOptions } from './types';

export const sendEmail = async (data: SendGridOptions): Promise<void> => {
  // try {
  //   sendgrid.setApiKey(process.env.SENDGRID_KEY);
  //   await sendgrid.send(data);
  // } catch (error) {
  //   console.error(error);
  // }
};
