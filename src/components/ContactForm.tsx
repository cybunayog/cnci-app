import { Text, Button } from '@rneui/themed';
import { Formik } from 'formik';
import React from 'react';
import { View, Alert, TextInput, StyleSheet } from 'react-native';
import { object, string } from 'yup';

import { colors, platform, strings, constants } from '../constants';
import { sendEmail } from '../lib/api';
import { type SendGridOptions } from '../lib/types';

export const ContactForm = (): React.JSX.Element => {
  const ContactFormSchema = object().shape({
    email: string().email('Please enter valid email').required('Email Address is Required'),
    content: string().required('Message cannot be empty.'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        content: '',
      }}
      validationSchema={ContactFormSchema}
      onSubmit={async (values, actions) => {
        if (values.email.length > 0 && values.content.length > 0) {
          try {
            const data: SendGridOptions = {
              to: 'cybunayog+test@gmail.com',
              from: values.email,
              subject: 'CNCI USA | Email Inquiry',
              text: values.content,
            };

            await sendEmail(data);

            if (platform.isWeb) {
              alert(strings.tempEmailMessage);
            } else {
              Alert.alert(strings.tempEmailMessage);
            }
            actions.setSubmitting(false);
          } catch (error) {
            console.log(error);
          }
        } else {
          if (platform.isWeb) {
            alert(strings.emailErrorMessage);
          } else {
            Alert.alert(strings.emailErrorMessage);
          }
        }
      }}>
      {({ handleChange, handleSubmit, handleBlur, values }) => (
        <View style={styles.container}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            keyboardType="email-address"
          />
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            value={values.content}
            onChangeText={handleChange('content')}
            onBlur={handleBlur('content')}
            multiline
          />
          <Button
            color={colors.cnciBlue}
            buttonStyle={styles.button}
            onPress={() => handleSubmit}
            titleStyle={styles.buttonText}>
            {constants.send}
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  textarea: {
    height: 120,
  },
  buttonContainer: {
    padding: 10,
  },
  button: {
    borderRadius: 4,
    width: 100,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
});
