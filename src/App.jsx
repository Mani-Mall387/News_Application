import { useEffect, useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Heading from "./Components/Heading";
import News from "./Components/News";
import NewsBoard from "./Components/NewsBoard";
function App() {
  const [type,setType]=useState('general');
  
  const handleNewsType = (cat) => {
    setType(cat.toLowerCase());
  };

  return (
    <>
        <Navbar handleNewsType={handleNewsType} />
        <Heading />
        <NewsBoard type={type}/>
    </>
  );
}

export default App;
