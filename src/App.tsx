import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigator } from "./routes/Navigator";

export const App = () => (
  <SafeAreaProvider>
    <Navigator />
  </SafeAreaProvider>
);
