import AddItemList from "./AddItemList";
import NutritionData from "./NutritionData";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 h-[calc(100vh-75px)]">
            <NutritionData />
            <AddItemList />
        </div>
    );
};

export default Dashboard;
