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
import { Plus } from "lucide-react";

const AddItemDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-green-200">
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
                        placeholder="I had a banana shake with 1 tbsp sugar and 1 tbsp honey"
                        className="col-span-3"
                    />
                </div>
                <DialogFooter>
                    <Button type="submit">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddItemDialog;
