import * as S from './styles/app'
import { GlobalStyles } from './styles/global'

import { Modal } from 'components'
import { AppRoutes } from 'routes'

function App() {
  return (
    <S.App>
      <GlobalStyles />
      <AppRoutes />
      <Modal />
    </S.App>
  )
}

export default App
