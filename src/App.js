import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState, React } from "react";
import CodeArea from "./components/CodeArea";
import Try from "./components/Try";
function App() {
  const [Theme, SetTheme] = useState("Dark");
  const [ThemeCode, SetThemeCode] = useState(false);
  useEffect(() => {
    ThemeCode === false ? SetTheme("Dark") : SetTheme("Light");
  }, [ThemeCode]);
  return (
    <div
      className={`w-full h-screen ${
        Theme === "Dark" ? "bg-[#021728]" : "bg-slate-400"
      } `}
    >
      <Navbar Theme={Theme} ThemeCode={ThemeCode} SetThemeCode={SetThemeCode} />
      <CodeArea Theme={Theme}/>
      <Try/>
    </div>
  );
}

export default App;
