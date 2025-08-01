function FoodTable() {


    const foodData = [
        { name: "Paneer Butter Masala", type: "Vegetarian", calories: 450 },
        { name: "Chicken Biryani", type: "Non-Vegetarian", calories: 550 },
        { name: "Masala Dosa", type: "Vegetarian", calories: 300 },
        { name: "Mutton Curry", type: "Non-Vegetarian", calories: 600 },
        { name: "Veg Pulao", type: "Vegetarian", calories: 350 },
        { name: "Fish Fry", type: "Non-Vegetarian", calories: 480 },
        { name: "Chole Bhature", type: "Vegetarian", calories: 520 },
        { name: "Egg Curry", type: "Non-Vegetarian", calories: 400 },
        { name: "Idli Sambar", type: "Vegetarian", calories: 220 },
        { name: "Tandoori Chicken", type: "Non-Vegetarian", calories: 570 },
    ];


    return (
        <div className="shadow-bottom flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold mb-4">🥗 Food Calorie Table</h1>
            <table className="w-4/5 text-center border-collapse border-2 border-black">
                <thead>
                    <tr className="bg-[#ecddc9]">
                        <th className="p-4 font-bold border border-black">🍽️ Food</th>
                        <th className="p-4 font-bold border border-black">🧾 Type</th>
                        <th className="p-4 font-bold border border-black">🔥 Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {foodData.map((food) => (
                        <tr className="bg-[#f8efef]">
                            <td className="px-2 py-4 border border-black">{food.name}</td>
                            <td className={`px-2 py-4 border border-black font-medium ${food.type === "Vegetarian" ? "text-green-600" : "text-red-600"}`}>
                                {food.type}
                            </td>
                            <td className="px-2 py-4 border border-black">{food.calories} kcal</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    }

    export default FoodTable;
