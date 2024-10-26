import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import ViewContact from './pages/ViewContact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/viewContact' element={<ViewContact />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
