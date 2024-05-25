import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";

const ProfilePage = () => {
    const user = {
        name: "John Doe",
        role: "Software Engineer",
        avatar: "https://via.placeholder.com/150",
        email: "johndoe@example.com",
        phone: "(123) 456-7890",
        currentWeight: "75kg",
        targetWeight: "70kg",
        height: "175cm",
        daysUsing: 120,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    };

    return (
        <div className="min-h-screen p-6 ">
            <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden rounded-lg shadow-lg">
                    <CardHeader className="flex items-center justify-center p-6 text-white bg-gradient-to-r from-blue-500 to-teal-500">
                        <Avatar
                            className="w-24 h-24 border-4 border-white rounded-full"
                            src={user.avatar}
                            alt="Profile Picture"
                        />
                        <div className="text-center">
                            <CardTitle className="text-2xl font-bold">
                                {user.name}
                            </CardTitle>
                            <CardDescription>{user.role}</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">About Me</h2>
                            <Separator className="my-2" />
                            <p className="text-gray-700 dark:text-gray-300">
                                {user.bio}
                            </p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">
                                Basic Information
                            </h2>
                            <Separator className="my-2" />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-gray-700 dark:text-gray-300">
                                    <p>
                                        <span className="font-semibold">
                                            Current Weight:
                                        </span>{" "}
                                        {user.currentWeight}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Target Weight:
                                        </span>{" "}
                                        {user.targetWeight}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Height:
                                        </span>{" "}
                                        {user.height}
                                    </p>
                                </div>
                                <div className="text-gray-700 dark:text-gray-300">
                                    <p>
                                        <span className="font-semibold">
                                            Days Using:
                                        </span>{" "}
                                        {user.daysUsing}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Email:
                                        </span>{" "}
                                        {user.email}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Phone:
                                        </span>{" "}
                                        {user.phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Button className="text-white bg-blue-500 hover:bg-blue-600">
                                Follow
                            </Button>
                            <Button className="text-white bg-teal-500 hover:bg-teal-600">
                                Message
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;