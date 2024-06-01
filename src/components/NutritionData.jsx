import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ProgressProvider from "@/utils/ProgressProvider";
import { Label } from "./ui/label";
import { useSelector } from "react-redux";

const NutritionData = () => {
    const calorieGoalData = useSelector((state) => state.nutritionData);
    // console.log("calorieGoalData", calorieGoalData);
    const calorieIntakeData = useSelector((state) => state.presentNutrition);
    const [perCalories, perProtein, perFats, perCarbs] = [
        (calorieIntakeData.calories / calorieGoalData.tdee) * 100,
        (calorieIntakeData.protein / calorieGoalData.dailyProtein) * 100,
        (calorieIntakeData.fats / calorieGoalData.dailyFats) * 100,
        (calorieIntakeData.carbs / calorieGoalData.dailyCarbs) * 100,
    ];
    const parsedData = [
        parseFloat(perCalories.toFixed(2)),
        parseFloat(perProtein.toFixed(2)),
        parseFloat(perFats.toFixed(2)),
        parseFloat(perCarbs.toFixed(2)),
    ];
    return (
        <div className="flex flex-col items-center justify-center col-span-5 px-24 pb-4">
            <Card className="w-full px-4 py-2">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <ProgressProvider valueStart={0} valueEnd={parsedData[0]}>
                        {(value) => (
                            <CircularProgressbarWithChildren
                                valueStart
                                value={value}
                            >
                                <img
                                    style={{ width: 100, marginTop: -5 }}
                                    src="https://i.imgur.com/b9NyUGm.png"
                                    alt="doge"
                                />
                                <div style={{ fontSize: 20, marginTop: -5 }}>
                                    <strong>{value}%</strong> mate
                                </div>
                            </CircularProgressbarWithChildren>
                        )}
                    </ProgressProvider>
                </CardContent>
                <CardFooter>
                    <div className="w-full">
                        <Label>Total Protein</Label>
                        <Progress value={parsedData[1]} />
                        <Label>Total Carbs</Label>
                        <Progress value={parsedData[3]} />
                        <Label>Total Fats</Label>
                        <Progress value={parsedData[2]} />
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NutritionData;
