import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Fetchitems from "../components/Fetchitems"
import { useSelector } from "react-redux"
function App() {
  const fetchStatus=useSelector(store=>(store.fetchStatus));
  return (
    <>
    <Header/>
    <Fetchitems/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
