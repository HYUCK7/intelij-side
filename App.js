import React from "react";
import {useRoutes} from 'react-router-dom'
import Home from "./components/commons/Home";

const App = () => {
  return useRoutes([
      {path: "/", element: <Home/>}
      ]
  );
}
export default App