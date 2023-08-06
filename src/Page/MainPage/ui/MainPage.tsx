import { BugButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'

const MainPage = () => {

  const { t } = useTranslation('main')


  return (
    <div>{t('Главная страница')}
      <BugButton />
      <Text 
      text = 'Text for MainPage'
      title = 'Title for MainPage'
      />
    </div>

  )
}

export default MainPage
