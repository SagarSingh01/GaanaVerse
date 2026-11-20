import Header from './Components/Main/Header'
import Footer from './Components/Main/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App