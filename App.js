import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SplashScreen } from './src/views/SplashScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SplashScreen />
    </>
  );
}
