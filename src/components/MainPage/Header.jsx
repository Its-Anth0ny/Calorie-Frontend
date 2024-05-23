import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
    return (
        <div className="w-full h-[75px] flex items-center justify-between px-6 py-4">
            <Link to="/" className="text-2xl font-bold">
                FitSwipe
            </Link>
            <div className="flex items-center">
                <Link to="/dashboard/:id" className="mr-4">
                    Dashboard
                </Link>
                <Link to="/profile/:id" className="mr-4">
                    Profile
                </Link>
                <Link to="/about" className="mr-4">
                    About
                </Link>
                <Link to="/contact" className="mr-4">
                    Contact
                </Link>
            </div>
            <div className="flex items-center space-x-2">
                <ModeToggle />
                <Link to="/logout">
                    <button className="btn btn-primary">Logout</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
