const Welcome = () => {
    return (
        <div className="min-h-[calc(100vh-75px)] relative">
            <div className="h-[calc(100vh-75px)] overflow-hidden relative flex justify-between items-center bg-black">
                <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center opacity-50"></div>
                <ul className="text-white/50">
                    <li className="absolute top-0 left-5 text-[200px] font-bold p-0 m-0 gradient-opacity text-orange-500/70">
                        Swipe
                    </li>
                    <li className="absolute top-48 left-[250px] text-[200px] font-bold gradient-opacity">
                        Track
                    </li>
                    <li className="absolute bottom-0 right-5 text-[200px] font-bold gradient-opacity">
                        Transform
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Welcome;
