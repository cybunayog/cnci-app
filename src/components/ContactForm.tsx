import { Text, Button } from '@rneui/themed';
import { Formik } from 'formik';
import React from 'react';
import { View, Alert, TextInput, StyleSheet, type GestureResponderEvent } from 'react-native';
import { object, string } from 'yup';

import { colors, platform, strings, constants } from '../constants';
import { sendEmail } from '../lib/api';
import { type FormInitialValues, type SendGridOptions } from '../lib/types';

export const ContactForm = (): React.JSX.Element => {
  const ContactFormSchema = object().shape({
    email: string().email('Please enter valid email').required('Email Address is required.'),
    content: string().required('Message cannot be empty.'),
  });

  const submit = async (values: FormInitialValues): Promise<void> => {
    console.log(values);
    if (values.email.length > 0 && values.content.length > 0) {
      try {
        const data: SendGridOptions = {
          from: values.email,
          subject: 'CNCI USA | Email Inquiry',
          html: `<p>${values.content}</p>`,
        };

        await sendEmail(data);

        if (platform.isWeb) {
          alert(strings.tempEmailMessage);
        } else {
          Alert.alert(strings.tempEmailMessage);
        }
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
  };

  return (
    <Formik
      initialValues={{ email: '', content: '' } as FormInitialValues}
      validationSchema={ContactFormSchema}
      onSubmit={submit}>
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            keyboardType="email-address"
          />
          {errors.email != null ? (
            <Text style={{ color: colors.red, marginTop: -15, paddingVertical: 5 }}>
              {errors.email}
            </Text>
          ) : (
            <></>
          )}
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            value={values.content}
            onChangeText={handleChange('content')}
            onBlur={handleBlur('content')}
            multiline
          />
          {errors.content != null ? (
            <Text style={{ color: colors.red, marginTop: -15, paddingVertical: 5 }}>
              {errors.content}
            </Text>
          ) : (
            <></>
          )}
          <Button
            color={colors.cnciBlue}
            buttonStyle={styles.button}
            onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void}
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
