import * as S from './styles/app'
import { GlobalStyles } from './styles/global'

import { AppRoutes } from 'routes'

function App() {
  return (
    <S.App>
      <GlobalStyles />
      <AppRoutes />
    </S.App>
  )
}

export default App
