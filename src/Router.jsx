import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AddCoffee from "./pages/AddCoffee";
import DetailsCoffee from "./pages/DetailsCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";

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
  {
    path: 'coffee-details/:id',
    element: <DetailsCoffee/>,
    loader:({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path: 'coffee-update/:id',
    element: <UpdateCoffee/>,
    loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
  }
]);

export default router;
