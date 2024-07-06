import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { EMAIL_API_KEY } from "@/utils/Constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    const username = useSelector((state) => state.userData.username);
    const useremail = useSelector((state) => state.userData.useremail);
    const [name, setName] = useState(username || "");
    const [email, setEmail] = useState(useremail || "");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        setName(username || "");
        setEmail(useremail || "");
    }, [username, useremail]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", EMAIL_API_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setError(false);
            setResult("Message Sent Successfully");
            event.target.reset();
            setMessage("");
            timeoutRef.current = setTimeout(() => {
                setResult("");
            }, 2000);
        } else {
            setError(true);
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-75px)] p-4">
            <Card className="w-full max-w-lg p-6 rounded-lg shadow-lg">
                <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                            <Label
                                htmlFor="name"
                                className="block text-sm font-medium"
                            >
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                value={name}
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full mt-1"
                                required
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="email"
                                className="block text-sm font-medium"
                            >
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full mt-1"
                                required
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="message"
                                className="block text-sm font-medium"
                            >
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="block w-full mt-1"
                                rows="4"
                                required
                            />
                        </div>
                        <div className="flex justify-end mb-4">
                            <Button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600"
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                    <span
                        className={`mt-4 block ${
                            error ? "text-red-500" : "text-green-500"
                        }`}
                    >
                        {result}
                    </span>
                </CardContent>
            </Card>
        </div>
    );
};

export default Contact;
