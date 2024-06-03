import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
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
    const calorieIntakeData = useSelector((state) => state.presentNutrition);
    const parsedCalories = [
        parseFloat(calorieIntakeData.calories.toFixed(2)),
        parseFloat(calorieGoalData.tdee.toFixed(2)),
    ];
    const parsedProtein = [
        parseFloat(calorieIntakeData.protein.toFixed(2)),
        parseFloat(calorieGoalData.dailyProtein.toFixed(2)),
    ];
    const parsedFats = [
        parseFloat(calorieIntakeData.fats.toFixed(2)),
        parseFloat(calorieGoalData.dailyFats.toFixed(2)),
    ];
    const parsedCarbs = [
        parseFloat(calorieIntakeData.carbs.toFixed(2)),
        parseFloat(calorieGoalData.dailyCarbs.toFixed(2)),
    ];
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
                    <CardTitle>
                        Total Calorie Intake:{" "}
                        {` ( ${parsedCalories[0]} / ${parsedCalories[1]} )`}
                    </CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <ProgressProvider valueStart={0} valueEnd={parsedData[0]}>
                        {(value) => (
                            <CircularProgressbarWithChildren
                                valueStart
                                value={value}
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    // rotation: 0.25,

                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: "butt",

                                    // Text size
                                    textSize: "16px",

                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors

                                    pathColor:
                                        calorieIntakeData.calories <=
                                        calorieGoalData.tdee
                                            ? `rgba(11, 156, 49, ${value / 20})`
                                            : `#EE4B2B`,
                                })}
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
                        <Label>
                            Total Protein:
                            {` ( ${parsedProtein[0]} / ${parsedProtein[1]} )`}
                        </Label>
                        <Progress
                            value={
                                calorieIntakeData.protein <
                                calorieGoalData.dailyProtein
                                    ? parsedData[1]
                                    : 100
                            }
                            indicatorClr={
                                calorieIntakeData.protein <=
                                calorieGoalData.dailyProtein
                                    ? "bg-green-500"
                                    : "bg-red-500"
                            }
                        />
                        <Label>
                            Total Carbs:{" "}
                            {` ( ${parsedCarbs[0]} / ${parsedCarbs[1]} )`}
                        </Label>
                        <Progress
                            value={
                                calorieIntakeData.carbs <
                                calorieGoalData.dailyCarbs
                                    ? parsedData[3]
                                    : 100
                            }
                            indicatorClr={
                                calorieIntakeData.carbs <=
                                calorieGoalData.dailyCarbs
                                    ? "bg-green-500"
                                    : "bg-red-500"
                            }
                        />
                        <Label>
                            Total Fats:{" "}
                            {` ( ${parsedFats[0]} / ${parsedFats[1]} )`}
                        </Label>
                        <Progress
                            value={
                                calorieIntakeData.fats <
                                calorieGoalData.dailyFats
                                    ? parsedData[2]
                                    : 100
                            }
                            indicatorClr={
                                calorieIntakeData.fats <=
                                calorieGoalData.dailyFats
                                    ? "bg-green-500"
                                    : "bg-red-500"
                            }
                        />
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NutritionData;
