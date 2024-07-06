import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="w-screen h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainPage;
