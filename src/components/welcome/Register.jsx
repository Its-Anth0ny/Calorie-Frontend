import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { BACKEND_URL } from "@/utils/Constants";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "../ui/use-toast";

const Register = () => {
    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState("");
    const [step, setStep] = useState(1);
    const { toast } = useToast();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        age: "",
        height: "",
        weight: "",
        targetWeight: "",
        gender: "",
        lifestyle: "",
        weightLossRate: "",
        weightGainRate: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep((prevStep) => prevStep + 1);
    };

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        const {
            username,
            email,
            password,
            age,
            height,
            weight,
            targetWeight,
            gender,
            lifestyle,
            weightLossRate,
            weightGainRate,
        } = userData;

        try {
            const response = await axios.post(`${BACKEND_URL}/api/register`, {
                username,
                email,
                password,
                age,
                height,
                weight,
                targetWeight,
                gender,
                lifestyle,
                weightLossRate,
                weightGainRate,
            });
            if (response.status === 201) {
                toast({
                    title: "Registration successful",
                    description: "Please login to continue",
                });
                navigate("/login");
            } else {
                toast({
                    title: "Registration failed",
                    description: "Please try again",
                    type: "error",
                });
                navigate("/register");
                console.error("Signup failed:", response.data);
            }
        } catch (error) {
            console.error("Signup error:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const renderFormFields = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <div className="mb-4">
                            <Label
                                htmlFor="age"
                                className="block text-sm font-medium"
                            >
                                Age
                            </Label>
                            <Input
                                id="age"
                                name="age"
                                type="number"
                                value={userData.age}
                                onChange={handleChange}
                                className="block w-full p-2 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <Label className="block mb-1 text-sm font-medium">
                                Gender
                            </Label>
                            <RadioGroup
                                value={userData.gender}
                                onValueChange={(e) =>
                                    handleChange({
                                        target: { name: "gender", value: e },
                                    })
                                }
                                className="flex gap-4"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="male" id="r1" />
                                    <Label htmlFor="r1">Male</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="female" id="r2" />
                                    <Label htmlFor="r2">Female</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="mb-4">
                            <Label
                                htmlFor="weight"
                                className="block text-sm font-medium"
                            >
                                Weight (in Kg)
                            </Label>
                            <Input
                                id="weight"
                                name="weight"
                                type="number"
                                value={userData.weight}
                                onChange={handleChange}
                                className="block w-full p-2 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <Label
                                htmlFor="targetWeight"
                                className="block text-sm font-medium"
                            >
                                Target Weight (in kg)
                            </Label>
                            <Input
                                id="targetWeight"
                                name="targetWeight"
                                type="number"
                                value={userData.targetWeight}
                                onChange={handleChange}
                                className="block w-full p-2 mt-1"
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="mb-4">
                            <Label
                                htmlFor="height"
                                className="block text-sm font-medium"
                            >
                                Height (in cm)
                            </Label>
                            <Input
                                id="height"
                                name="height"
                                type="number"
                                value={userData.height}
                                onChange={handleChange}
                                className="block w-full p-2 mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <Label className="block mb-1 text-sm font-medium">
                                Lifestyle
                            </Label>
                            <Select
                                value={userData.lifestyle}
                                onValueChange={(e) =>
                                    handleChange({
                                        target: { name: "lifestyle", value: e },
                                    })
                                }
                            >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Current lifestyle" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="sedentary">
                                            Sedentary
                                        </SelectItem>
                                        <SelectItem value="lightlyactive">
                                            Lightly Active
                                        </SelectItem>
                                        <SelectItem value="moderatelyactive">
                                            Moderately Active
                                        </SelectItem>
                                        <SelectItem value="veryactive">
                                            Very Active
                                        </SelectItem>
                                        <SelectItem value="extremelyactive">
                                            Extremely Active
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {userData.weight > userData.targetWeight ? (
                            <div className="mb-4">
                                <Label className="block mb-1 text-sm font-medium">
                                    Weight Loss Rate (Kg per week)
                                </Label>
                                <RadioGroup
                                    value={userData.weightLossRate}
                                    onValueChange={(e) =>
                                        handleChange({
                                            target: {
                                                name: "weightLossRate",
                                                value: e,
                                            },
                                        })
                                    }
                                    className="flex flex-wrap gap-4"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={0.25} id="r1" />
                                        <Label htmlFor="r1">0.25</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={0.5} id="r2" />
                                        <Label htmlFor="r2">0.5</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={1} id="r3" />
                                        <Label htmlFor="r3">1</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        ) : (
                            <div className="mb-4">
                                <Label className="block mb-1.5 text-sm font-medium">
                                    Weight Gain Rate (Kg per week)
                                </Label>
                                <RadioGroup
                                    value={userData.weightGainRate}
                                    onValueChange={(e) =>
                                        handleChange({
                                            target: {
                                                name: "weightGainRate",
                                                value: e,
                                            },
                                        })
                                    }
                                    className="flex flex-wrap gap-4"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={0.25} id="r1" />
                                        <Label htmlFor="r1">0.25</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={0.5} id="r2" />
                                        <Label htmlFor="r2">0.5</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={1} id="r3" />
                                        <Label htmlFor="r3">1</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        )}
                    </div>
                );
            case 3:
                return (
                    <div>
                        <div className="mb-4">
                            <Label
                                htmlFor="username"
                                className="block text-sm font-medium"
                            >
                                Username
                            </Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                value={userData.username}
                                onChange={handleChange}
                                className="block w-full p-2 mt-1"
                            />
                        </div>
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
                                value={userData.email}
                                onChange={handleChange}
                                className="block w-full p-2 mt-1"
                            />
                        </div>
                        <div className="mb-4">
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
                                value={userData.password}
                                onChange={handleChange}
                                className="block w-full p-2 mt-1"
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {show ? (
                <Navigate to="/dashboard" />
            ) : (
                <div className="grid min-h-screen grid-cols-12">
                    <div
                        className="flex flex-col items-center justify-center col-span-7 p-10 text-white bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D')",
                        }}
                    >
                        <div className="mb-4 text-3xl font-bold">Acme Inc</div>
                        <p className="mb-8 text-xl">
                            This library has saved me countless hours of work
                            and helped me deliver stunning designs to my clients
                            faster than ever before.
                        </p>
                        <p className="text-sm">Sofia Davis</p>
                    </div>
                    <div className="flex flex-col items-center justify-center col-span-5">
                        <h2 className="text-[50px]">Register</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-md p-8"
                        >
                            {renderFormFields()}
                            {step < 3 && (
                                <Button
                                    onClick={handleSubmit}
                                    className="w-full py-2 mt-4"
                                >
                                    Next
                                </Button>
                            )}
                            {step === 3 && (
                                <Button
                                    onClick={handleSubmit2}
                                    className="w-full py-2 mt-4"
                                >
                                    Sign Up
                                </Button>
                            )}
                            <p className="mt-4 text-center">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-orange-500 hover:underline"
                                >
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
