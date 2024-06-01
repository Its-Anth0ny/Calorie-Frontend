import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { useDispatch } from "react-redux";
import { setUserData } from "@/utils/userDataSlice";
import { useEffect } from "react";
import { BACKEND_URL } from "@/utils/Constants";
import axios from "axios";
import { setNutritionData } from "@/utils/nutritionDataSlice";

const Header = () => {
    const dispatch = useDispatch();

    const dailygoals = async (userId) => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/${userId}`);
            if (response.data.status === "ok") {
                // console.log("response", response.data.calorieData[0]);
                const dailydata = response.data.calorieData[0];
                // console.log("dailydata", dailydata);
                dispatch(
                    setNutritionData({
                        userId: dailydata.user,
                        bmr: dailydata.bmr,
                        tdee: dailydata.tdee,
                        targetCaloriesLoss: dailydata.targetCaloriesLoss,
                        targetCaloriesGain: dailydata.targetCaloriesGain,
                        dailyProtein: dailydata.dailyProtein,
                        dailyFats: dailydata.dailyFats,
                        dailyCarbs: dailydata.dailyCarbs,
                    })
                );
            }
        } catch (error) {
            console.error("error", error);
        }
    };

    const decodeToken = (data, token) => {
        try {
            const decoded = JSON.parse(atob(token.split(".")[1]));
            if (decoded && decoded.userId) {
                dailygoals(decoded.userId);
                dispatch(
                    setUserData({
                        userId: data.userData._id,
                        username: data.userData.username,
                        data: {
                            gender: data.userData.gender,
                            age: data.userData.age,
                            weight: data.userData.weight,
                            height: data.userData.height,
                            targetWeight: data.userData.targetWeight,
                            lifestyle: data.userData.lifestyle,
                        },
                    })
                );
            } else {
                console.error(
                    "Error: Decoded token does not contain user information"
                );
            }
        } catch (error) {
            console.error("Error decoding token:", error);
        }
    };

    useEffect(() => {
        const dataString = localStorage.getItem("Data");
        const data = JSON.parse(dataString);
        const token = data.token;
        if (token) {
            decodeToken(data, token);
        }
    }, []);

    return (
        <div className="w-full h-[75px] flex items-center justify-between px-6 py-4">
            <Link to="/" className="text-2xl font-bold">
                FitSwipe
            </Link>
            <div className="flex items-center">
                <Link to="/dashboard" className="mr-4">
                    Dashboard
                </Link>
                <Link to="/profile" className="mr-4">
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
