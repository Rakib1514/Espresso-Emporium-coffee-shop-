import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AddCoffee from "./pages/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    loader: () => fetch("http://localhost:5000/coffees"),
  },
  {
    path: "/add-new-coffee",
    element: <AddCoffee />,
  },
]);

export default router;
