import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import ThemeContext from "./context/ThemeContext";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await axios.get("/data.json");
      setData(data.data);
    }
    getData();
  }, []);

  return (
    <>
      <ThemeContext>
        <header className="header">
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <ThemeSwitch />
        </header>

        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/detail/:id" element={<Detail data={data} />} />
        </Routes>
      </ThemeContext>
    </>
  );
}

export default App;
