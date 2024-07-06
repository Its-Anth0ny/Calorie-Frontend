import { Link } from "react-router-dom";
// import { ModeToggle } from "./mode-toggle";
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
                const dailydata = response.data.calorieData[0];
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
                        userName: data.userData.username,
                        userEmail: data.userData.email,
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
        <div className="w-full h-[75px] flex items-center justify-between px-6 py-4 bg-gradient-to-b from-orange-900 to-orange-500 text-black">
            <Link to="/" className="text-2xl font-bold">
                FitSwipe
            </Link>
            <div className={`flex items-center space-x-8`}>
                <Link
                    to="/dashboard"
                    className="hover:underline hover:underline-offset-2"
                >
                    Dashboard
                </Link>
                <Link
                    to="/profile"
                    className="hover:underline hover:underline-offset-2"
                >
                    Profile
                </Link>
                <Link
                    to="/about"
                    className="hover:underline hover:underline-offset-2"
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className="hover:underline hover:underline-offset-2"
                >
                    Contact
                </Link>
            </div>
            <div className="flex items-center space-x-2">
                {/* <ModeToggle /> */}
                <Link to="/logout">
                    <button className="btn btn-primary hover:font-medium">
                        Logout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
