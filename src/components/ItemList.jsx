import { useSelector } from "react-redux";
import AddItemDialog from "./AddItemDialog";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

const ItemList = (fetchNutritionInfo) => {
    const items = useSelector((state) => state.itemData.fooditems);

    return (
        <div className="col-span-7 p-6 pr-10 overflow-hidden rounded-lg shadow-xl ">
            <AddItemDialog handleAddItem={fetchNutritionInfo} />
            <div className="w-full h-[calc(100vh-200px)] mt-6">
                <ScrollArea className="w-full h-full p-4 border rounded-lg ">
                    {items.map((item) => (
                        // console.log(item),
                        <div key={item._id} className="w-full mb-4">
                            <div className="flex w-full p-4 transition-shadow duration-300 rounded-lg shadow-md hover:shadow-lg">
                                <div className="w-1/4">
                                    <img
                                        src={item.foodimg}
                                        alt={item.foodname}
                                        className="h-[150px] w-full object-cover rounded-md"
                                    />
                                </div>
                                <div className="w-3/4 pl-4 text-lg">
                                    <h1 className="text-2xl font-bold">
                                        {item.foodname}
                                    </h1>
                                    <p className="">
                                        Calories: {item.calories}
                                    </p>
                                    <p className="">
                                        Proteins: {item.proteins}
                                    </p>
                                    <p className="">Carbs: {item.carbs}</p>
                                    <p className="">Fiber: {item.fiber}</p>
                                </div>
                            </div>
                            <Separator
                                orientation="horizontal"
                                className="my-2"
                            />
                        </div>
                    ))}
                </ScrollArea>
            </div>
        </div>
    );
};

export default ItemList;
