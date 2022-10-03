import { Route, Routes } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductsPage></ProductsPage>}></Route>
      <Route path='/about' element={<AboutPage></AboutPage>}></Route>
    </Routes>
  )
}

export default App;
