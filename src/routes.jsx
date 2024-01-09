import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Root from "./components/layout/root";
import BusinessOutcome from "./views/BusinessOutcome";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <App />,
       
        },
        {
          path:'/businessoutcome',
          element:<BusinessOutcome />
        }
      ],
    },
  ]);

export default router;