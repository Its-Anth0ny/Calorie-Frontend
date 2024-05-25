import Header from "@/components/mainpage/Header";
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="w-screen h-screen">
            <Header />
            <Outlet />
        </div>
    );
};

export default MainPage;
