// import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black bg-opacity-20 backdrop-blur-sm">
            <div className="container px-4 py-4 mx-auto opacity-100">
                <div className="flex items-center justify-between text-xs">
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
