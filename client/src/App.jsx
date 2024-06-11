import { useState } from 'react'
import './App.css'
// import Login from './components/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROUTER } from './routes/ROUTES'
import ContextMenu from './context/ContextMenu'

function App() {
  const [count, setCount] = useState(0)
const routesa = createBrowserRouter(ROUTER)
  return (
 <>
 <ContextMenu>

 <RouterProvider router={routesa}/>
 </ContextMenu>

  </>
  )
}

export default App
