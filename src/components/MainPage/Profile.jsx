import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSelector } from "react-redux";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";

const ProfilePage = () => {
    const username = useSelector((state) => state.userData.username);
    const userData = useSelector((state) => state.userData.data);
    // console.log(username);
    const user = {
        gender: userData.gender,
        age: userData.age,
        currentWeight: userData.weight,
        targetWeight: userData.targetWeight,
        height: userData.height,
        lifestyle: userData.lifestyle,
    };
    // console.log(user);
    const progress = Math.min(
        (user.currentWeight / user.targetWeight) * 100,
        100
    );

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-75px)] font-sans leading-normal tracking-normal ">
            <div className="container max-w-3xl p-5 mx-auto rounded-lg shadow-lg">
                <Card className="p-6">
                    <CardHeader className="flex items-center justify-center mb-6">
                        <Avatar className="flex items-center justify-center w-20 h-20 text-4xl font-bold rounded-full bg-light-orange">
                            <AvatarImage
                                src={`https://ui-avatars.com/api/?name=${username}`}
                            />
                            <AvatarFallback>NA</AvatarFallback>
                        </Avatar>
                        <div className="">
                            <CardTitle className="text-3xl font-semibold capitalize">
                                {username}
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="">Gender:</Label>
                                <p className="capitalize">{user.gender}</p>
                            </div>
                            <div>
                                <Label className="">Age:</Label>
                                <p className="">{user.age}</p>
                            </div>
                            <div>
                                <Label className="">Weight:</Label>
                                <p className="">{user.currentWeight} kg</p>
                            </div>
                            <div>
                                <Label className="">Height:</Label>
                                <p className="">{user.height} cm</p>
                            </div>
                            <div>
                                <Label className="">Target Weight:</Label>
                                <p className="">{user.targetWeight} kg</p>
                            </div>
                            <div>
                                <Label className="">Lifestyle:</Label>
                                <p className="capitalize">{user.lifestyle}</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Label className="">Weight Progress:</Label>
                            <Progress
                                indicatorClr="bg-orange-500"
                                primitiveClr="bg-orange-200"
                                value={progress}
                                max={100}
                            />
                            <p className="mt-2 ">
                                {progress.toFixed(1)}% to target weight
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;
