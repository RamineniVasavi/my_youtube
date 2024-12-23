import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Maincontainer />
      },
      {
        path:"watch",
        element:<WatchPage />
      }
    ]
  }
]);
function App() {
  return (
    <Provider store={store}>{/*To provide Redux store*/}
   <div >
    <Head />
    <RouterProvider router={appRouter}/> {/*To provide routing*/}
   </div>
   </Provider>
  );
}

export default App;
