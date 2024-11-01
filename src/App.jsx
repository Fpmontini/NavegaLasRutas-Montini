

import './App.css'
import NavBar from './components/navBar/navBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ItemListContainerWithHoc from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import Cart from './components/cartWidget/CartWidget.jsx'

function App() {

  return (

    <div className='fm__main'>
      <BrowserRouter>   
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainerWithHoc/>} />
          <Route path="/category/:idCategory" element={<ItemListContainerWithHoc/>} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
        </Routes>

        <Footer/>       
      </BrowserRouter>
    </div>
  )
}

export default App
