const Footer = () => {
    return (
        <footer className="backdrop-blur-sm bg-black opacity-50">
            <div className="container text-white py-8  mx-auto px-4 opacity-100">
                <div className="flex justify-between items-center">
                    <p>
                        &copy; {new Date().getFullYear()} FitSwipe- Your Calorie
                        Tracker. All rights reserved.
                    </p>
                    <div className="flex items-center">
                        <a href="#" className="mr-4">
                            Privacy Policy
                        </a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
