import { createBrowserRouter } from "react-router-dom";
import App from "./App"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/test",
        element: "Hello World"
    }
]);

export default router;