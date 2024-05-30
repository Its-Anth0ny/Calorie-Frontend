import { useState } from "react";
import AddItemList from "../AddItemList";
import NutritionData from "../NutritionData";

const Dashboard = () => {
    const [dailyCalorieGoal, setDailyCalorieGoal] = useState(2000);
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
