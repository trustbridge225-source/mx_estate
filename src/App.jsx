import Navbar from './components/Navbar'
import Home from "./components/Home"
import Location from "./components/Location"
import Amenities from "./components/Amenities"
import Highlights from "./components/HighLight"
import FloorPlan from "./components/FloorPlan"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import Form from "./components/Form"

import { useEffect,useState } from "react"

function App() {
  const [open,setOpen] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  },[])
  return (
    <>
      <Navbar/>
      <Home/>
      <Highlights/>
      <Location/>
      <Amenities/>
      <FloorPlan/>
      <Gallery/>
      <Footer/>
      <Form open={open} setOpen={setOpen}/>
    </>
  )
}

export default App
