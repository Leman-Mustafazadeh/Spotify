import { useEffect } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROUTER } from './routes/ROUTES'
import { useDispatch } from 'react-redux'
import { getAll } from './API'
import { endpoints } from './API/constants'
import { handleMusicData, hundleAllDAta, hundleSearchDAta } from './redux/slice/player'
function App() {
  const routesa = createBrowserRouter(ROUTER);
  const dispatch = useDispatch();

  useEffect(() => {
    getAll(endpoints.songs).then((res) => {
      dispatch(hundleAllDAta(res.data));
    });
  }, []);

  useEffect(() => {
    getAll(endpoints.music).then((res) => {
      dispatch(handleMusicData(res.data));
    });
  }, []);

  useEffect(() => {
    getAll(endpoints.search).then((res) => {
      dispatch(hundleSearchDAta(res.data));
    });
  }, []);


  

  return (
    <>
      <RouterProvider router={routesa} />
    </>
  )
}

export default App
