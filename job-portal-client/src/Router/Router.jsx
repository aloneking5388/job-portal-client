import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../Pages/Home";
import About from "../Pages/About"
import Postjobs from "../Pages/Postjobs";
import Myjob from "../Pages/MyJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/post-job", element: <Postjobs /> },
            { path: "/my-job", element: <Myjob /> },
            { path: "/about", element: <About /> }
        ]
    }
]);

export default router;