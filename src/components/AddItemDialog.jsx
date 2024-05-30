import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { BACKEND_URL } from "@/utils/Constants";
import { DialogClose } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

const AddItemDialog = () => {
    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);
    const [dailyCalories, setDailyCalories] = useState(0);
    const [nutritionInfo, setNutritionInfo] = useState(null);

    const fetchNutritionInfo = async () => {
        try {
            setError(null);
            const response = await fetch(
                "https://trackapi.nutritionix.com/v2/natural/nutrients",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-app-id": "c43e6f63",
                        "x-app-key": "aa8ff0a5f7bc695884d7c0c39fe5570d",
                    },
                    body: JSON.stringify({ query: query }),
                }
            );

            const data = await response.json();
            console.log(data);
            // setNutritionInfo(data);
            // Update daily calorie intake
            if (data && data.foods && data.foods.length > 0) {
                const totalCalories = data.foods.reduce(
                    (total, food) => total + food.nf_calories,
                    0
                );
                setDailyCalories(dailyCalories + totalCalories);
            }
            // Reset query after successful fetch
            setQuery("");
            handleSubmit(data);
        } catch (error) {
            setError("Error fetching data. Please try again.");
        } finally {
            // setLoading(false);
        }
    };

    const handleSubmit = async (nutritionInfo) => {
        // event.preventDefault();
        try {
            // await fetchNutritionInfo();
            const response = await fetch(
                `${BACKEND_URL}/api/user-food-intake`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    // body: JSON.stringify({
                    //     // Replace with the actual user ID
                    //     foodName: nutritionInfo.foods[0].food_name,
                    //     quantity: nutritionInfo.foods.reduce((total, food) => total + food.serving_qty, 0), // Sum of serving quantities of all foods
                    //     servingSize: 'serving', // Assuming serving size is constant for all foods
                    //     calories: nutritionInfo.foods[0].nf_calories,
                    //     timestamp: new Date()
                    // })
                    body: JSON.stringify(
                        nutritionInfo.foods.map((food) => ({
                            username: "testuser", // Replace with the actual username
                            foodName: food.food_name,
                            quantity: food.serving_qty,
                            servingSize: food.serving_weight_grams, // Assuming serving size is constant for all foods
                            calories: food.nf_calories,
                            proteins: food.nf_protein,
                            carbs: food.nf_total_carbohydrate,
                            fats: food.nf_total_fat,
                            fiber: food.nf_dietary_fiber,
                            cholesterol: food.nf_cholesterol,
                            timestamp: new Date(),
                        }))
                    ),
                }
            );
            // console.log(response);
            if (!response.ok) {
                throw new Error("Failed to log food intake");
            }

            // Clear query and nutritionInfo after successful submission
            setQuery("");
            setNutritionInfo(null);

            // Fetch nutrition info for the next query
        } catch (error) {
            setError("Error logging food intake");
        }
    };

    const handleQuery = (event) => {
        setQuery(event.target.value);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className="" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle cla>Add Items</DialogTitle>
                    <DialogDescription>
                        Provide description of your meal.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Input
                        id="name"
                        value={query}
                        onChange={handleQuery}
                        placeholder="I had a banana shake with 1 tbsp sugar and 1 tbsp honey..."
                        className="col-span-3"
                    />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button
                            type="submit"
                            onClick={() => fetchNutritionInfo()}
                        >
                            Submit
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddItemDialog;
