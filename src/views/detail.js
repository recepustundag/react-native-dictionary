import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native'
import { useFocusEffect } from '@react-navigation/core';
import Box from '../components/styled/box';
import Text from '../components/styled/Text';

function DetailView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  )

  return (
    <Box bg="softRed" p={16} as={SafeAreaView} flex={1}>
      <Text>Detail Screen</Text>
    </Box>
  );
}

export default DetailView
