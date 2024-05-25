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

const NutritionData = () => {
    const calories = 100;
    const targetCalories = 2000;
    const percentage = (calories / targetCalories) * 100;
    return (
        <div className="flex flex-col items-center justify-center col-span-5 px-24 pb-4">
            <Card className="w-full px-4 py-2">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <ProgressProvider valueStart={0} valueEnd={percentage}>
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
                        <Progress value={percentage} />
                        <Label>Total Carbs</Label>
                        <Progress value={percentage} />
                        <Label>Total Fats</Label>
                        <Progress value={percentage} />
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NutritionData;