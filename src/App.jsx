import { Route, Routes } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchPosts, fetchUsers } from "./store/slice/postSlice"

import Header from "./components/Header"
import HomePage from "./page/Home/HomePage"
import DetailPage from "./page/Detail/DetailPage"
import AddPage from "./page/AddPost/AddPage"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchUsers())
  }, [])


  return (
    <>
      <Header />
      <Routes >
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/detail/:id"} element={<DetailPage />} />
        <Route path={"/newPost"} element={<AddPage />} />
      </Routes>
    </>
  )
}

export default App 
