import { Route, Routes } from "react-router-dom";
import "../src/index.css";
import "./App.css";
import "./assets/styles/main.css";
import { routes } from "./routes";
//
function App() {
  return (
    <>
      <Routes>
        {routes?.map((i, index) => {
          return <Route key={index} path={i?.path} element={i?.component}/>;
        })}
      </Routes>
    </>
  );
}

export default App;
