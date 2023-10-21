import { BugButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'
import { Text } from 'shared/ui/Text/Text'
import { VStack } from 'shared/ui/Stack'

const MainPage = () => {

  const { t } = useTranslation('main')

  return (
    <Page>
      <VStack>
      {t('Главная страница')}
      <BugButton />
      <Text
        text='Text for MainPage'
        title='Title for MainPage'
      />
      </VStack>
    </Page>

  )
}

export default MainPage
