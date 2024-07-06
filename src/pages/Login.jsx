import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BACKEND_URL } from "@/utils/Constants";
import { useToast } from "../components/ui/use-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_URL}/api/login`, {
                email,
                password,
            });
            if (response.status === 200) {
                const { user, token } = response.data;
                const dataToStore = {
                    userData: user,
                    token: token,
                };
                // Store user data and token in local storage
                localStorage.setItem("Data", JSON.stringify(dataToStore));
                toast({
                    description: "Login successful!",
                    duration: 1000,
                });
                // Redirect to dashboard
                navigate("/dashboard");
            } else {
                console.error("Login failed:", response.data);
            }
            setLoggedIn(true);
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="grid min-h-screen grid-cols-12">
            <div
                className="flex flex-col items-center justify-between col-span-7 p-6 bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D')",
                }}
            >
                <div className="w-full text-3xl font-bold">FitSwipe</div>
                <p className="text-center text-md ">
                    If you keep good food in your fridge, you will eat good
                    food.
                    <p className="mt-2 text-sm font-light">-Errick Mcadams</p>
                </p>
            </div>
            <div className="flex flex-col items-center justify-center col-span-5">
                <h2 className="text-[50px] ">Login</h2>
                <form onSubmit={handleSubmit} className="w-full max-w-md p-8">
                    <div className="mb-4">
                        <Label
                            htmlFor="email"
                            className="block text-sm font-medium"
                        >
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full p-2 mt-1 border rounded-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <Label
                            htmlFor="password"
                            className="block text-sm font-medium"
                        >
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full p-2 mt-1 border rounded-lg"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full py-2 text-lg font-medium"
                    >
                        Login
                    </Button>
                    <p className="mt-4 text-center">
                        Not a User?{" "}
                        <Link
                            to="/register"
                            className="text-orange-500 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
