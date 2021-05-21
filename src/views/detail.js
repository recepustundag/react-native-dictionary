import React from 'react'
import { SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/core'
import Box from '../components/styled/box'
import Text from '../components/styled/Text'
import ActionButton, { ActionButtonTitle } from '../components/action-button'
import {
  DetailSummaryItemContainer,
  DetailSummaryItemTitle,
  DetailSummaryItemSummary
} from '../components/detail-summary-item'

import theme from '../utils/theme'

/* icons */
import { Sound, Hand, FavoriteSolid } from '../components/icons'

function DetailView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )

  return (
    <Box bg="softRed" as={SafeAreaView} flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            Detay
          </Text>
          <Text color="textLight" mt={6}>
            Arapça Kalem
          </Text>
        </Box>

        <Box flexDirection="row" mt={24}>
          <ActionButton>
            <Sound width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={12}>
            <FavoriteSolid width={24} height={24} color={theme.colors.red} />
          </ActionButton>
          <ActionButton ml="auto">
            <Hand color={theme.colors.textLight} />
            <ActionButtonTitle>Merhaba</ActionButtonTitle>
          </ActionButton>
        </Box>

        <Box mt={40}>
          <DetailSummaryItemContainer>
            <DetailSummaryItemTitle>
              Lorem İpsum Dolor Sit aMet
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              Lorem İpsum Dolor Sit aMet
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>
              Lorem İpsum Dolor Sit aMet
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              Lorem İpsum Dolor Sit aMet
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>
              Lorem İpsum Dolor Sit aMet
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              Lorem İpsum Dolor Sit aMet
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>
              Lorem İpsum Dolor Sit aMet
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              Lorem İpsum Dolor Sit aMet
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
