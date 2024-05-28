import Welcome from "./pages/Welcome";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/mainpage/Dashboard";
import Profile from "./components/mainpage/Profile";
import About from "./components/mainpage/About";
import Contact from "./components/mainpage/Contact";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Login from "./components/welcome/Login";
import Register from "./components/welcome/Register";

const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Welcome />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/",
            element: <MainPage />,
            children: [
                { path: "dashboard/:id", element: <Dashboard /> },
                { path: "profile/:id", element: <Profile /> },
                { path: "about", element: <About /> },
                { path: "contact", element: <Contact /> },
            ],
        },
    ]);
    return (
        <div className="">
            <RouterProvider router={appRouter} />
            <Footer />
        </div>
    );
};

export default App;
