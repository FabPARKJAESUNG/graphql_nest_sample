import React from "react";

import "./App.css";
import { Provider as GqlProvider } from "./gql";
import { BrowserRouter, useRoutes } from "react-router-dom";

import RootPage from "./components/pages/Default/RootPage";
function AppRoutes() {
  return useRoutes([{ path: "/", element: <RootPage /> }]);
}

function App() {
  return (
    <GqlProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GqlProvider>
  );
}

export default App;
