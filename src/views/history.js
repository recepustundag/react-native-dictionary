import React from 'react';
import {StatusBar, Text} from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import SafeAreaView from 'react-native-safe-area-view'

import Box from '../components/styled/box';

function HistoryView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  )

  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>History Screen</Text>
    </Box>
  );
}

export default HistoryView
