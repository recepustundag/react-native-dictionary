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
import { Sound, Hand, Favorite } from '../components/icons'
import LoaderText from '../components/loaderText'

function DetailView({ route }) {
  const [data, setData] = React.useState(null)
  const keyword = route.params?.keyword
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const data = await response.json()
    setData(data[0])
  }

  React.useEffect(() => {
    getDetailData()
  }, [])

  return (
    <Box bg="softRed" as={SafeAreaView} flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          <Text color="textLight" mt={6}>
            {data?.lisan}
          </Text>
        </Box>

        <Box flexDirection="row" mt={24}>
          <ActionButton disabled={!data}>
            <Sound width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={12} disabled={!data}>
            <Favorite width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml="auto" disabled={!data}>
            <Hand color={theme.colors.textLight} />
            <ActionButtonTitle>Merhaba</ActionButtonTitle>
          </ActionButton>
        </Box>

        <Box mt={40}>
          <DetailSummaryItemContainer>
            <LoaderText />
            <LoaderText width={200} mt={10} />
          </DetailSummaryItemContainer>

          {data
            ? data.anlamlarListe.map((item) => (
                <DetailSummaryItemContainer border>
                  <DetailSummaryItemTitle>
                    {item.anlam}
                  </DetailSummaryItemTitle>
                  { data.orneklerListe && data.orneklerListe.map(ornek => (
                  <DetailSummaryItemSummary key={ornek.ornek_id}>
                    {ornek.ornek}
                  </DetailSummaryItemSummary>
                  ))}
                </DetailSummaryItemContainer>
              ))
            : [1, 2, 3].map((index) => (
                <DetailSummaryItemContainer key={index} border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailSummaryItemContainer>
              ))}
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
