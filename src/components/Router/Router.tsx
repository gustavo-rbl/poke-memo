import { RouterProvider, createBrowserRouter } from "react-router-dom";

// layout
import RootLayout from "../Layout/RootLayout";

// page
import Home from "../../pages/Home/Home";
import Game from "../../pages/Game/Game";
import About from "../../pages/About/About";
import NotFound from "../../pages/NotFound/NotFound";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "game",
          element: <Game />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
