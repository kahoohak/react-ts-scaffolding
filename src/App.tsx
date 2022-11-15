import React from "react";
import { Routes, Route } from "react-router-dom";

const ComponentHome = () => {
  return <div>home test router</div>;
};

const routers = [
  {
    path: "/",
    text: "",
    element: () => <ComponentHome />,
  },
];

const App = () => {
  return (
    <div className="app">
      <Routes>
        {routers.map((item) => (
          <Route key={item.path} path={item.path} element={item.element()}></Route>
        ))}
      </Routes>
    </div>
  );
};

export default App;
