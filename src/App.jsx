import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/app-layout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {

          },
        ],
      },
    ],
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
