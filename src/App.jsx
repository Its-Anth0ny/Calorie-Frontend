import Welcome from "./pages/Welcome";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainPage from "./MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "./components/ui/toaster";

const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
            children: [
                { path: "/", element: <Welcome /> },
                { path: "dashboard", element: <Dashboard /> },
                { path: "profile", element: <Profile /> },
                { path: "about", element: <About /> },
                { path: "contact", element: <Contact /> },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);
    return (
        <div className="">
            <RouterProvider router={appRouter} />
            <Toaster />
        </div>
    );
};

export default App;
