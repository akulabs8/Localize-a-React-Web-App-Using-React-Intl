import Header from './components/Header'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Text from './pages/Text'
import Number from './pages/Number'
import DateTime from './pages/DateTime'
import { LanguageWrapper } from './context/Language'
import './App.css'

const Layout = () => (
<div className='container'>
   <Header />
   <Outlet />
</div>
)

export default function App() {

return (
   <LanguageWrapper>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Text />} />
            <Route path="number" element={<Number />} />
            <Route path="date" element={<DateTime />} />
         </Route>
      </Routes>
      </BrowserRouter>
   </LanguageWrapper>
)
}


