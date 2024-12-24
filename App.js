/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

function App() {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, []);

  console.log(hasPermission, device);

  if (!hasPermission) return <></>;
  if (device == null) return <></>;

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
