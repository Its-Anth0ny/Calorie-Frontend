import Welcome from "./pages/Welcome";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/mainpage/Dashboard";
import Profile from "./components/mainpage/Profile";
import About from "./components/mainpage/About";
import Contact from "./components/mainpage/Contact";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";

const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Welcome />,
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
