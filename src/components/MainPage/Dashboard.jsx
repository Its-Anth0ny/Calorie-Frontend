import { useEffect, useState } from "react";
import AddItemList from "../AddItemList";
import NutritionData from "../NutritionData";

const Dashboard = () => {
    const [username, setUsername] = useState("");

    // Track daily calorie intake
    const [dailyCalorieGoal, setDailyCalorieGoal] = useState(2000); // Default daily calorie goal

    const decodeToken = (token) => {
        try {
            const decoded = JSON.parse(atob(token.split(".")[1]));
            //   console.log('Decoded token:', decoded);
            if (decoded && decoded.userId) {
                setUsername(decoded.userId);
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

        // console.log('Token from localStorage:', token);

        if (token) {
            decodeToken(token);
        }
    }, []);

    // Function to update daily calorie goal
    const handleGoalChange = (event) => {
        setDailyCalorieGoal(parseInt(event.target.value));
    };

    return (
        <div className="grid grid-cols-12 h-[calc(100vh-75px)]">
            <NutritionData />
            <AddItemList />
        </div>
    );
};

export default Dashboard;
