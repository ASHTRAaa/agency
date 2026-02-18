import "./App.css"
import {Routes,Route} from "react-router-dom";
import MainLayout from "./layout/main-layout/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import AboutUs from "./pages/about-us/AboutUs.jsx";


function App() {
 
  return (
   
   <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home />} />
      <Route path="about-us" element={<AboutUs/>}/>
      </Route>
    </Routes>
  );
}

export default App
