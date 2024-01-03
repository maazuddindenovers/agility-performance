import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Root from "./components/layout/root";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <App />,
       
        },
      ],
    },
  ]);

export default router;