import { Route, Routes } from 'react-router-dom'

import './assets/styles/index.scss'
import {
  ButtonPage,
  CardPage,
  ColorPage,
  FooterPage,
  HeaderPage,
  IconographyPage,
  InputPage,
  LogoPage,
  OverviewPage,
  TypographyPage,
} from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<OverviewPage />} />
      <Route path='/components/button' element={<ButtonPage />} />
      <Route path='/components/card' element={<CardPage />} />
      <Route path='/components/footer' element={<FooterPage />} />
      <Route path='/components/header' element={<HeaderPage />} />
      <Route path='/components/input' element={<InputPage />} />
      <Route path='/foundations/color' element={<ColorPage />} />
      <Route path='/foundations/iconography' element={<IconographyPage />} />
      <Route path='/foundations/logos' element={<LogoPage />} />
      <Route path='/foundations/typography' element={<TypographyPage />} />
      <Route path='*' element={<OverviewPage />} />
    </Routes>
  )
}

export default App
