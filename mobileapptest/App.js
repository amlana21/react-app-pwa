import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview'
export default function App() {
  return (
    <WebView
      source={{ uri: 'change_to_hosted_react_app_url' }}
      style={{ marginTop: '10%' }}
      sharedCookiesEnabled={true}
      thirdPartyCookiesEnabled={true}    
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
