import { useEffect } from "react";
import ItemList from "../components/ItemList";
import NutritionData from "../components/NutritionData";
import axios from "axios";
import { BACKEND_URL } from "@/utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { setInitialData } from "@/utils/itemDataSlice";
import { setInitialNutrition } from "@/utils/presentNutritionSlice";

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
                    let [calories, protein, fats, carbs, fiber] = [
                        0, 0, 0, 0, 0,
                    ];
                    response.data.forEach((item) => {
                        calories += item.calories;
                        protein += item.proteins;
                        fats += item.fats;
                        carbs += item.carbs;
                        fiber += item.fiber;
                    });
                    dispatch(
                        setInitialNutrition({
                            calories: calories,
                            protein: protein,
                            fats: fats,
                            carbs: carbs,
                            fiber: fiber,
                        })
                    );
                }
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getFoodItems();
    }, [userId]);

    return (
        <div className="grid grid-cols-12 h-[calc(100vh-75px)]">
            <NutritionData />
            <ItemList />
        </div>
    );
};

export default Dashboard;
