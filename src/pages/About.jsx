import React from "react";

const About = () => {
    const developers = [
        {
            name: "Alice Johnson",
            speciality: "Frontend Developer",
            skills: ["React", "Redux", "JavaScript", "CSS"],
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Bob Smith",
            speciality: "Backend Developer",
            skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Charlie Brown",
            speciality: "Full Stack Developer",
            skills: ["React", "Node.js", "GraphQL", "Docker"],
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="min-h-screen text-white">
            <div className="container px-6 py-12 mx-auto">
                <h1 className="mb-12 text-4xl font-bold text-center">
                    About Us
                </h1>
                <div className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">
                        About the Project
                    </h2>
                    <p className="text-lg">
                        FitSwipe is a modern web application designed to help
                        users track their nutritional intake and achieve their
                        fitness goals. Our platform provides detailed insights
                        into daily calorie consumption, macro-nutrient
                        distribution, and personalized recommendations based on
                        user-specific data.
                    </p>
                </div>
                <div>
                    <h2 className="mb-8 text-3xl font-bold">
                        Meet the Developers
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {developers.map((dev, index) => (
                            <div
                                key={index}
                                className="p-6 text-black rounded-lg shadow-lg bg-gradient-to-r from-fuchsia-700 to-fuchsia-400 "
                            >
                                <img
                                    src={dev.image}
                                    alt={dev.name}
                                    className="w-32 h-32 mx-auto mb-4 rounded-full"
                                />
                                <h3 className="mb-2 text-2xl font-bold text-center">
                                    {dev.name}
                                </h3>
                                <p className="mb-4 text-xl text-center">
                                    {dev.speciality}
                                </p>
                                <div className="text-center">
                                    <h4 className="mb-2 text-lg font-semibold">
                                        Skills:
                                    </h4>
                                    <ul className="list-disc list-inside">
                                        {dev.skills.map((skill, idx) => (
                                            <li key={idx}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
