import React, { useState } from "react";
import { View, Alert, TextInput, StyleSheet } from "react-native";
import { Text, Button } from "@rneui/themed";

import { colors, platform, strings, constants } from "../constants";

export const ContactForm = () => {
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (): void => {
    // TODO: Call email API to handle email, for now throw an alert.

    if (!email || !content) {
      platform.isWeb
        ? alert(strings.emailErrorMessage)
        : Alert.alert(strings.emailErrorMessage);
    } else {
      platform.isWeb
        ? alert(strings.tempEmailMessage)
        : Alert.alert(strings.tempEmailMessage);
    }

    // Clear form after submit
    setEmail("");
    setContent("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Message</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder=""
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline
      />

      <Button
        color={colors.cnciBlue}
        buttonStyle={styles.button}
        onPress={handleSubmit}
        titleStyle={styles.buttonText}
      >
        {constants.send}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 6,
    fontWeight: "500",
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
