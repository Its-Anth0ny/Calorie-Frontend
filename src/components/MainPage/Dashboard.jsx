import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import NutritionData from "../NutritionData";
import axios from "axios";
import { BACKEND_URL } from "@/utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { setInitialData } from "@/utils/itemDataSlice";

const Dashboard = () => {
    const userId = useSelector((state) => state.userData.userid);
    const dispatch = useDispatch();
    const getFoodItems = async () => {
        try {
            if (userId) {
                // console.log(`${BACKEND_URL}/api/user-food-intake/${userId}`);
                const response = await axios.get(
                    `${BACKEND_URL}/api/user-food-intake/${userId}`
                );
                if (response.statusText == "OK") {
                    // console.log("response", response.data);
                    dispatch(setInitialData(response.data));
                }
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getFoodItems();
    }, [userId]);

    const [dailyCalorieGoal, setDailyCalorieGoal] = useState(2000);
    // Function to update daily calorie goal
    const handleGoalChange = (event) => {
        setDailyCalorieGoal(parseInt(event.target.value));
    };

    return (
        <div className="grid grid-cols-12 h-[calc(100vh-75px)]">
            <NutritionData />
            <ItemList />
        </div>
    );
};

export default Dashboard;
